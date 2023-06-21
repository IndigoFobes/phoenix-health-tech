import React from "react";
import { Link } from "react-router-dom";
import PHTLogo from "../assets/PHT_LOGO_BLUE.png";

export default function Landing({ currentPage, handlePageChange }) {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center mb-20 mx-auto my-auto pb-20">
        <div className="flex justify-center mt-10 pr-20">
          <img
            className=" w-4/5 xl:w-3/5 align-middle object-cover object-top"
            src={PHTLogo}
            alt="PHT Logo, colorful phoenix"
          ></img>
        </div>
        <p className="mt-10 dm-sans text-center text-lg md:text-2xl lg:text-3xl text-stone-700 mx-10">
          Changing the world, one breath at a time. <br></br> Helping you feel
          your best!
        </p>
        <Link
          to="/home"
          className="bg-sky-400 px-2 py-1.5 md:px-3.5 md:py-2.5 lg:px-5 lg:py-3 text-lg md:text-xl lg:text-2xl mt-8 rounded-md font-semibold text-white hover:bg-sky-600"
          onClick={() => handlePageChange("Home")}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
