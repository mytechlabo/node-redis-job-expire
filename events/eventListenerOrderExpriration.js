const express = require("express");
const redis = require("redis");

const app = express();
const subscribe = redis.createClient();
subscribe.connect();

subscribe.pSubscribe("__keyevent@0__:expired", (message, channel) => {
  console.log("Channel: ", channel);
  console.log("Sau khi chung ta co orderID: ", message);
  // Update trong BD la orderID chua thanh toan...
});

app.listen(process.env.PORT || 3010, () => {
  console.log(`EventListener is running 3010`);
});
