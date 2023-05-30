type User = { id: number; name: string };
type Post = { id: number; title: string };

type DbClientOperations = {
  $transaction<Result>(fn: (tx: TransactionClient) => Promise<Result>): Promise<Result>;
};

type ModelDelegates = {
  user: {
    create: () => User;
    findMany: () => User[];
  };
  post: {
    create: () => Post;
    findMany: () => Post[];
  };
};

type DbClient = ModelDelegates & DbClientOperations;

// TransactionClientを先に定義したほうがいいのかも
type TransactionClient = Omit<DbClient, "$transaction">;

type Session = { execute: (args: unknown) => any };

function createModelAction({ model, action, session }: { model: string; action: string; session: Session }) {
  return () => session.execute({ model, action });
}

function createDbClient(session: Session): DbClient {
  const modelDelegates = new Proxy(
    {},
    {
      get(target, prop) {
        console.log("proxy 2", prop, target[prop]);
        const model = prop.toString();

        return {
          create: createModelAction({ model, action: "create", session }),
          findMany: createModelAction({ model, action: "findMany", session }),
        };
      },
    }
  ) as ModelDelegates;

  // TransactionだけmodelDelegatesが必要なので、後から作る（$queryRawなどはmodelDelegatesは不要）
  const baseDbClient: DbClientOperations = {
    $transaction(fn) {
      console.log("transaction started");
      return fn(modelDelegates);
    },
  };

  const dbClient = new Proxy(baseDbClient, {
    get(target, prop) {
      console.log("proxy 1", prop, target[prop]);
      if (target[prop] !== undefined) {
        return target[prop];
      }
      return modelDelegates[prop];
    },
  }) as DbClient;

  return dbClient;
}

const db = createDbClient({
  execute: (args) => {
    console.log("connect to database", args);
  },
});
db.user.create();
db.user.findMany();
db.post.create();
db.post.findMany();
const result = db.$transaction(async (tx) => ({ id: 1, name: "bob" }));
console.log(result);
