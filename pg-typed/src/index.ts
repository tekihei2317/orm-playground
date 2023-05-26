import { findAllPosts, findPostWithComments } from "./query.queries";
import { Client } from "pg";

export const client = new Client({
  host: "localhost",
  user: "admin123",
  password: "admin123",
  database: "testdb",
});

async function main() {
  await client.connect();
  const post = await findAllPosts.run(
    { postId: "1", isDraft: undefined },
    client
  );
  const postWithComments = await findPostWithComments.run(
    { postId: "1" },
    client
  );
  console.log({ post, postWithComments });

  await client.end();
}

main();
