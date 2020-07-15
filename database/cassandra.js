const cassandra = require('cassandra-driver');
const db = require('./dbconfig.json').cassandra

const client = new cassandra.Client(db);
var start = Date.now();
const query = `SELECT * FROM ks.banners WHERE campaign_id =100`;
client.execute(query)
.then(result => {
  console.log(result.rows[0]);
  console.log(`Query time: ${Date.now() - start} ms`)
  client.shutdown()
}).catch(err =>{
  console.log(err);
  client.shutdown();
})