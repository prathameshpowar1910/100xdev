// write a function to create a users table in your db

import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "100xDev",
  user: "postgres",
  password: "postgres",
})

// const client = new Client({
//   connectionString: "postgresql://postgres:postgres@localhost:5432/100xDev"
// });

// client.connect();

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
      CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
  `)
  console.log(result);
}
console.log("Creating users table");

// createUsersTable();