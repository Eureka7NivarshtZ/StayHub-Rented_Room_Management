
import "dotenv/config";
import mysql from "mysql2/promise";

const required = ["DB_HOST", "DB_USER", "DB_NAME"];
const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  throw new Error(
    `Missing database environment variables: ${missing.join(", ")}`
  );
}

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "stayhub",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

console.log("DB password loaded:", Boolean(process.env.DB_PASSWORD));

export default pool;
