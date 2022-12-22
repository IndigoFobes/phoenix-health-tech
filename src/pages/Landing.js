import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex justify-center pt-20">
      <div className="">
        <h1>LOGO HERE</h1>
        <p>Tag line here</p>
      </div>
      <Link to="/home">Learn More</Link>
    </div>
  );
}
