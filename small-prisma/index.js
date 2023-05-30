// prisma.user.findMany()などを実行した時に、'user'や'findMany'を文字列で取得したい
// Prisma Clientのランタイムでそれがどうやって実装されているのか知りたい

const target = { message1: "hello", message2: "world" };
const handler = {};
const proxy = new Proxy(target, {});

console.log(proxy.message1, proxy.message2, proxy.a);

const proxy2 = new Proxy(target, {
  get(target, prop, receiver) {
    return "world";
  },
});

console.log(proxy2.message1, proxy2.message2, proxy.a);

const proxy3 = new Proxy(target, {
  get(target, prop, receiver) {
    console.log({ target, prop, receiver });
    // targetは元のオブジェクト
    // propは呼び出されたプロパティのこと
    if (prop === "message1") {
      return "world";
    }
    return "hoge";
  },
});

console.log(proxy3.message1, proxy3.message2);

// PrismaのモデルのProxyでは、Proxyに次の6つのメソッドが追加されている
// get / has / ownKeys / set / getOwnPropertyDescriptor / defineProperty
