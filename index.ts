import { Database } from "bun:sqlite";

const db = new Database("mydb.sqlite", { create: true });

db.run(
  `CREATE TABLE IF NOT EXISTS users (id Integer Primary Key Autoincrement, name Text, email Text Unique)`,
);

const insertUser = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
insertUser.run("John Doe", "john@example.com");

const getUsers = db.prepare("SELECT * from users");

console.log(getUsers.all());
