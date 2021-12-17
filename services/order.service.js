const redis = require("redis");

const client = redis.createClient();
client.connect();

const addDelayEventOrder = ({ orderId, delay }) => {
  return new Promise((resolve, reject) => {
    client.setEx(orderId, delay, "Cancel order", (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  addDelayEventOrder,
};
