const redis = require('redis');

const redisClient = redis.createClient({host: process.env.REDIS_HOST, port: process.env.REDIS_PORT, no_ready_check: true, password: process.env.REDIS_PASSWORD});

redisClient.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

module.exports.redisClient = redisClient;
module.exports.redis = redis;