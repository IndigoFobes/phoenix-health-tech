import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";

const PUBLIC_KEY =
  "pk_test_51McfGXDjvpWh16vX4sf9Jn6DnW2voyWYISeKW4Hgn5cQSgBkasvlf2x9wNwctfj6Dm6gIgnjdSCecUmgl4G2LfLI00gmJHQB88";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
