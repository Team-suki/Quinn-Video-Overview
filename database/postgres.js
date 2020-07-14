const { Client } = require('pg');
const db = require('./dbconfig.json').postgres;
const client = new Client(db)
client.connect();

let start = Date.now();
client.query('SELECT * FROM banners WHERE campaign_id=900000', (err, res)=>{
  console.log(res.rows);
  console.log(`Query time: ${Date.now() - start}ms`)
  client.end();
})
