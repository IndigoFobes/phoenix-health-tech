import React from "react";
import LogoImg from "../assets/PHT_LOGO_noWORDS.png";
import { Link } from "react-router-dom";

export default function Footer({ currentPage, handlePageChange }) {
  return (
    <footer
      className={`${
        currentPage !== "Landing"
          ? "p-4 nav-bg shadow flex flex-col items-center md:p-6 dark:bg-gray-800"
          : "hidden"
      }`}
    >
      <div className="flex flex-col md:flex-row w-full items-center justify-between mb-3">
        <Link to="/home" onClick={() => handlePageChange("Home")}>
          <div className="ml-5 w-[120px] mb-5 md:mb-0 hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <img src={LogoImg} className="w-fit"></img>
          </div>
        </Link>
        <ul className="dm-sans-med flex gap-5 sm:gap-20 md:gap-1 md:flex-col md:mr-[130px]">
          <Link to="/home">
            <li
              className={
                "text-white hover:underline transition duration-200 ease-in-out"
              }
              onClick={() => handlePageChange("Home")}
            >
              Home
            </li>
          </Link>
          <Link to="/learn">
            <li
              className={
                "text-white hover:underline transition duration-200 ease-in-out"
              }
              onClick={() => handlePageChange("Learn")}
            >
              Learn
            </li>
          </Link>
          <Link to="/purchase">
            <li
              className={
                "text-white hover:underline transition duration-200 ease-in-out"
              }
              onClick={() => handlePageChange("Purchase")}
            >
              Purchase
            </li>
          </Link>
          <Link to="/about">
            <li
              className={
                "text-white hover:underline transition duration-200 ease-in-out"
              }
              onClick={() => handlePageChange("About")}
            >
              About
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={
                "text-white hover:underline transition duration-200 ease-in-out"
              }
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row w-full md:justify-between">
        <span className="text-sm md:text-base text-white flex flex-col items-center text-center gap-4 md:gap-0 md:items-start">
          © 2023 Phoenix Health Technologies. All Rights Reserved.
          <div className="flex">
            <span className="text-xs md:text-base">
              Site designed and built in Georgia, USA by{" "}
              <a
                href="https://indigofobes.github.io/indigo-react-portfolio/"
                target="blank"
                className="hover:underline"
              >
                Indigo
              </a>
            </span>
          </div>
        </span>
        <ul className="flex flex-wrap mt-8 justify-between md:items-center md:mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
          <Link to="/home">
            <li>
              <p
                className="mr-4 hover:underline md:mr-6"
                onClick={() => handlePageChange("Home")}
              >
                Privacy Policy
              </p>
            </li>
          </Link>
          <Link to="/home">
            <li>
              <p
                className="mr-4 hover:underline md:mr-6"
                onClick={() => handlePageChange("Home")}
              >
                Licensing
              </p>
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
