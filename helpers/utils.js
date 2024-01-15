// redisUtil.js
const redis = require("redis");
const { promisify } = require("util");
const config = require("../db/config");

const client = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  database: config.redis.db,
});

client.on("connect", () => {
  console.log("Connected to Redis server");
});

client.on("error", (err) => {
  console.error("Error connecting to Redis:", err);
});

client.connect();

const getAsync = promisify(client.get);
const setAsync = promisify(client.set);

module.exports = {
  client,
  getAsync,
  setAsync,
  quit: () => client.quit(),
};
