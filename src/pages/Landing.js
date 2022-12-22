import React from "react";
import { Link } from "react-router-dom";
import PHTLogo from "../assets/phoenix_title.png";

export default function Landing() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="px-4 mx-auto flex justify-center">
          <img
            className="w-3/4 align-middle object-cover object-top mb-20"
            src={PHTLogo}
            alt="PHT Logo, colorful phoenix"
          ></img>
        </div>
        <h1>LOGO HERE</h1>
        <p>Tag line here</p>
      </div>
      <Link to="/home">Learn More</Link>
    </div>
  );
}
