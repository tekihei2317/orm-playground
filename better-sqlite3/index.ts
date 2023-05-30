import * as Database from "better-sqlite3";

const db = new Database("sample.db");

const result = db.prepare("select 1;").get();
const result2 = db.prepare("select 1 as value union all select 3;").all();
console.log(result);
console.log(result2);
