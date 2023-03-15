import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div>
      <h1>Thanks for your order!</h1>
      <p>
        You will receive an email soon regarding your shipping/installment
        information.
      </p>
      <Link
        to="/home"
        className="bg-sky-400 px-2 py-1.5 md:px-3.5 md:py-2.5 lg:px-5 lg:py-3 text-lg md:text-xl lg:text-2xl mt-8 rounded-md font-semibold text-white hover:bg-sky-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
