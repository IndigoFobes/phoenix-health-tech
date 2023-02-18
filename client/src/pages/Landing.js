import React from "react";
import { Link } from "react-router-dom";
import PHTLogo from "../assets/PHT_logo_title.png";

export default function Landing() {
  return (
    <div className="flex flex-col items-center mb-20">
      <div className="px-4 mx-auto flex justify-center mt-10">
        <img
          className=" w-4/5 lg:w-3/4 align-middle object-cover object-top"
          src={PHTLogo}
          alt="PHT Logo, colorful phoenix"
        ></img>
      </div>
      <p className="font-sans text-center text-lg md:text-2xl lg:text-3xl font-medium text-stone-700 mx-10">
        Changing the world, one breath at a time.
      </p>
      <Link
        to="/home"
        className="bg-sky-400 px-2 py-1.5 md:px-3.5 md:py-2.5 lg:px-5 lg:py-3 text-lg md:text-xl lg:text-2xl mt-8 rounded-md font-semibold text-white hover:bg-sky-600"
      >
        Learn More
      </Link>
    </div>
  );
}
