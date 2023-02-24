const env = require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const e = require("express");

// connect Stripe
const STRIPE_KEY = process.env.STRIPE_SECRET;
const stripe = require("stripe")(STRIPE_KEY);

const PORT = process.env.PORT || 3001;
const app = express();

// Should I use app.use(express.urlencoded({ extended: false })); instead?
app.use(cors());
app.use(express.json());
app.use("/", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

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
router.post("/contact", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: `Phoenix Health Technologies`,
    to: process.env.GMAIL,
    subject: "Phoenix Health Tech Contact Form Submission",
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Phone number: ${phone}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

/** Stripe Integration
 *
 * app.get("/config")...
 *
 * app.post("/create-payment-intent")...
 *
 */

app.listen(PORT, () => {
  console.log(`API server listening at port ${PORT}!`);
});
