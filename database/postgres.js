const { Pool } = require('pg');
const db = require('./dbconfig.json').postgres;
const pool = new Pool(db)

module.exports = {
  query: (text, params) => pool.query(text, params)
};

