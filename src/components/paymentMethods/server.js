const express = require("express");
const app = express();
const stripe = require("stripe")('sk_test_51IfrSnFRZt7FtZ9TlFgFuHQ7paiQ3nHOakoDVGguBokhid4UOPAJhWRNxhFcUWbc7vVWYucdvRc6tqScKPcXsAKy00A0lbef98');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  const fullCost = items *100;
  return fullCost;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "pln",
    payment_method_types: ['card', 'p24'],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));