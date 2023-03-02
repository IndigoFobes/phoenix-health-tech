import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51McfGXDjvpWh16vX4sf9Jn6DnW2voyWYISeKW4Hgn5cQSgBkasvlf2x9wNwctfj6Dm6gIgnjdSCecUmgl4G2LfLI00gmJHQB88";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripeTestPromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
}
