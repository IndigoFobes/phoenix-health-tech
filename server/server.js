const env = require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
// const { ApolloServer } = require("apollo-server-express");
// const { typeDefs, resolvers } = require("../server/schemas");
// const db = require("./config/connection");
// const { authMiddleware } = require("./utils/auth");
const e = require("express");

// connect Stripe
const STRIPE_KEY = process.env.STRIPE_SECRET;
const stripe = require("stripe")(STRIPE_KEY);

const PORT = process.env.PORT || 3001;
const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// Should I use app.use(express.urlencoded({ extended: false })); instead?
app.use(cors());
app.use(express.json());
app.use(router);

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

/** Stripe Integration
 *
 * app.get("/config")...
 *
 * app.post("/create-payment-intent")...
 *
 */

// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });

//   db.once("open", () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(
//         `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
//       );
//     });
//   });
// };

app.listen(PORT, () => {
  console.log(`API server listening at port ${PORT}!`);
});
