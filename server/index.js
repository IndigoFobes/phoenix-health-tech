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

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
// Should I use app.use(express.urlencoded({ extended: false })); instead?
app.use(cors());
// express RAW for webhook route ONLY
app.use("/webhook", express.raw({ type: "*/*" }));
app.use("/", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.post("/create-customer", async (req, res) => {
//   const {paymentMethodType, currency,paymentMethodOptions} = req.body;

//   const params = {
//     payment_method_types: [paymentMethodType],
//     amount: 5999,
//     currency: currency,
//   }
// })

// Webhook to handle post-payment confirmation email
// **** UN-COMMENT When Stripe is ready for use!
// app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
//   const payload = req.body;
//   const signature = req.headers["stripe-signature"];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
//   } catch (error) {
//     console.log(error.message);
//     res.status(400).json({ message: "failed" });
//     return;
//   }

//   const data = event.data.object;
//   // handle the event
//   switch (event.type) {
//     case "payment_intent.created":
//       console.log("Payment intent created!");
//       break;
//     case "payment_intent.succeeded":
//       // define and call a method to handle payment intent success
//       console.log("Payment intent succeeded!");
//       break;
//     case "payment_intent.processing":
//       console.log("Payment intent processing.");
//       break;
//     case "payment_intent.payment_failed":
//       console.log("Payment failed for some reason.");
//       break;
//     case "checkout.session.completed":
//       // define and call a method to handle checkout session completed?
//       console.log("Checkout session completed!!");
//       break;
//     case "customer.created":
//       const cus = event.data.object.id;
//       console.log(`Customer ${cus} created!`);
//       break;
//     // payment_method.attached??
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   res.json();
// });

// express JSON for all other routes
app.use(express.json());

// Nodemailer setup
const contactEmail = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("email error:", error);
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
    from: "Phoenix Health Technologies from @phoenixhealthtech.com <will@phoenixhealthtech.com>",
    to: "will@phoenixhealthtech.com",
    subject: "Phoenix Health Tech Contact Form Submission",
    html: `
    <div style="align-content: center; margin-right: 50px">
        <div style="gap: 10px; background-color: #F4F4F5; padding: 20px 30px; border-style: solid; border-width: 6px; border-color: #38BDF8; border-radius: 5px">
          <div style="text-align: center">
            <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: semibold">
              Hi, Will. You have a new message from ${firstName}.
            </h2>
            <h3 style="font-size: 17px; font-weight: 500; border-bottom: solid 2px #A1A1AA; margin-bottom: 10px; padding-bottom: 10px" class="text-lg font-medium border-b-2 border-gray-400 mb-3 pb-2">
              Customer details:
            </h3>
          </div>
          <div style="font-size: 14px; align-items: start; gap: 5px; padding-left: 15px">
            <p style="display: flex">
              <span style="font-weight: 600">Name: </span> &nbsp; ${firstName} ${lastName}
            </p>
            <p style="display: flex">
              <span style="font-weight: 600">Phone number: </span> &nbsp; ${phone}
            </p>
            <p style="display: flex">
              <span style="font-weight: 600">Email: </span> &nbsp; ${email}
            </p>
            <p style="display: flex">
              <span style="font-weight: 600">Message: </span> &nbsp; ${message}
            </p>
          </div>
          <div style="padding: 15px 10px 0; text-align: center; font-size: 12px">
            <p>
              Don't respond to this email. <br></br>Contact ${firstName} in a separate
              email, or via phone, using the information provided.
            </p>
          </div>
        </div>
      </div>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
      console.log(error);
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

// Stripe integration
// **** UN-COMMENT When Stripe is ready for use!

// app.post("/payment", async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: 2000,
//       currency: "USD",
//       description: "HVAC Unit",
//       // customer: customer,
//       automatic_payment_methods: {
//         enabled: true,
//       },
//     });
//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     console.log("Error", error);
//     res.json({
//       message: "Payment failed.",
//       success: false,
//     });
//   }
// });

app.listen(PORT, () => {
  console.log(`API server listening at port ${PORT}!`);
});

module.exports = app;
