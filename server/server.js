const env = require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { typeDefs, resolvers } = require("../server/schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const e = require("express");
// connect Stripe
const STRIPE_KEY = process.env.STRIPE_SECRET;
const stripe = require("stripe")(STRIPE_KEY);

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

/** Stripe Integration
 *
 * app.get("/config")...
 *
 * app.post("/create-payment-intent")...
 *
 */

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};
