const env = require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const e = require("express");
const { response } = require("express");
const bodyParser = require("body-parser");
const endpointSecret = process.env.WEBHOOK_SECRET;
// import Success from "../client/src/pages/Success";

// connect Stripe
const STRIPE_KEY = process.env.STRIPE_SECRET_TEST; //***TODO**** change from TEST
const stripe = require("stripe")(STRIPE_KEY);

const PORT = process.env.PORT || 3001; // should it not be 3000?
const app = express();

// Should I use app.use(express.urlencoded({ extended: false })); instead?
app.use(cors());
// express RAW for webhook route ONLY
app.use("/webhook", express.raw({ type: "*/*" }));
app.use("/", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Webhook to handle post-payment confirmation email
app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const payload = req.body;
  const signature = req.headers["stripe-signature"];

  let event;
  // console.log(payload);
  // console.log(signature);
  // console.log("event.data****", event.data);

  try {
    event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "failed" });
    return;
  }

  // console.log(event.type);
  // console.log(event.data.object);
  // console.log(event.data.object.id);

  // handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      const email = event.data.object["receipt_email"];
      console.log(event.data.object);
      console.log(
        `PaymentIntent for ${paymentIntent.amount} for ${email} was successful`
      );
      // handlePaymentIntenetSucceeded(paymentIntent);
      break;
    // payment_method.attached??
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json();
});

// express JSON for all other routes
app.use(express.json());

// Nodemailer setup
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send!");
  }
});

// Router to send email
app.post("/contact", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: `Phoenix Health Technologies`,
    to: process.env.GMAIL,
    subject: "Phoenix Health Tech Contact Form Submission",
    html: `
    <div>
    <h2>Hi, Will. You have a new message from your website.</h2>
    <h3>Customer details:</h3>
    <p>Name: ${firstName} ${lastName}</p>
    <p>Phone number: ${phone}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    </div>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

// Stripe integration
app.post("/payment", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: "USD",
      description: "HVAC Unit",
      // receipt_email: req.body.email,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed.",
      success: false,
    });
  }
});

app.listen(PORT, () => {
  console.log(`API server listening at port ${PORT}!`);
});
