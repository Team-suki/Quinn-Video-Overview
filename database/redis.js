const redis = require('redis');

const connection = () => {return redis.createClient({host: process.env.REDIS_HOST, port: process.env.REDIS_PORT, no_ready_check: true, password: process.env.REDIS_PASSWORD})};

module.exports.connection = connection;
module.exports.redis = redis;