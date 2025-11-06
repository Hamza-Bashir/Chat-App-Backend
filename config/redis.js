const { createClient } = require("redis");

const redisUrl = "redis://127.0.0.1:6379";

const client = createClient({ url: redisUrl });
const publisher = client.duplicate(); 
const subscriber = client.duplicate(); 

client.on("error", (err) => console.error("Redis client error:", err));
publisher.on("error", (err) => console.error("Redis publisher error:", err));
subscriber.on("error", (err) => console.error("Redis subscriber error:", err));

(async () => {
  await client.connect();
  await publisher.connect();
  await subscriber.connect();
  console.log("Redis connected successfully!");
})();

module.exports = { client, publisher, subscriber };
