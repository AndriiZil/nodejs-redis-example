const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient();

client.on('error', (error) => {
    console.error(error);
});

const hgetAsync = promisify(client.hget).bind(client);
const hsetAsync = promisify(client.hset).bind(client);

module.exports = {
    hgetAsync,
    hsetAsync,
    client
};
