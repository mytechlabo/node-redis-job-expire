const express = require("express");

//Services
const { addDelayEventOrder } = require("./services/order.service");

const app = express();
app.use(express.json());

app.post("/order", async (req, res) => {
  try {
    const { userId, order } = req.body;
    await addDelayEventOrder({ orderId: order.id, delay: 5 });

    res.json({
      status: "success",
      msg: order,
    });
  } catch (error) {}
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running 3000`);
});
