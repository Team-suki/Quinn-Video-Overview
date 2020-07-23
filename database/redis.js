const redis = require('redis');

const connection = () => {return redis.createClient({host: process.env.REDIS_HOST, port: process.env.REDIS_PORT})};

module.exports.connection = connection;
module.exports.redis = redis;



// client.set("key", "value", redis.print)

// client.get("key", redis.print)

// client.quit()