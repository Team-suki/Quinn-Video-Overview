const redis = require('redis');

const client = redis.createClient({host: process.env.REDIS_HOST, port: process.env.REDIS_PORT});

client.on('error', () =>{
  console.error('error')
});

module.exports.client = client;
module.exports.redis = redis;



// client.set("key", "value", redis.print)

// client.get("key", redis.print)

// client.quit()