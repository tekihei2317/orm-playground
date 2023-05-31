import Database from "better-sqlite3";
import { FuwaClient } from "@fuwa-orm/client";
import { ModelGateways } from "./.fuwa-orm/index.js";

const db = FuwaClient.create<ModelGateways>(new Database("sample.db"));

const user = db.user.create();
console.log(user);

const post = db.post.create();
console.log(post);

const users = db.user.findMany();
console.log(users);
