const { Pool } = require('pg');
const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB
}
const pool = new Pool(db)

module.exports = {
  query: (text, params) => pool.query(text, params)
};

