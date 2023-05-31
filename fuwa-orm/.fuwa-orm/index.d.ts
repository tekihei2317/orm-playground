type User = { id: number; name: string };
type Post = { id: number; title: string };

export type ModelGateways = {
  user: {
    create: () => User;
    findMany: () => User[];
  };
  post: {
    create: () => Post;
    findMany: () => Post[];
  };
};
