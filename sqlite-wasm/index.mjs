import sqlite3InitModule from "@sqlite.org/sqlite-wasm";

async function main() {
  const sqlite3 = await sqlite3InitModule();
  const db = new sqlite3.oo1.DB("test.db");

  console.log({ db });
}

main();
