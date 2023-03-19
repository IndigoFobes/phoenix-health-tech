import React from "react";
import { Link } from "react-router-dom";
import PHTLogo from "../assets/PHT_LOGO_BLUE.png";
import PHTTitle from "../assets/PHT_TITLE_BLUE(2).png";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="flex flex-col items-center">
      {/* <div className="absolute top-5 left-5 2xl:left-10">
        <div className="grid grid-cols-8">
          <div className="col-start-1 w-60 xl:w-80">
            <Link to="/">
              <img
                className="object-cover "
                src={PHTLogo}
                alt="PHT Logo, colorful phoenix"
              ></img>
            </Link>
          </div>
        </div>
      </div> */}
      <div className="w-1/3 mt-5">
        <Link to="/" target="blank">
          <img src={PHTTitle} alt="Phoenix Health Technology"></img>
        </Link>
      </div>
      <nav className="flex w-4/5 mx-auto justify-center pb-16 my-10">
        <ul className="relative flex w-full flex-row border-none justify-center text-white font-semibold text-xl">
          <Link to="/home">
            <li>
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home"
                    ? "nav-link active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20 rounded-l-sm"
                    : "nav-link non-active py-3 2xl:py-4 px-6 md:px-12 rounded-l-sm 2xl:px-20"
                }
              >
                Home
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About"
                    ? "nav-link active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20"
                    : "nav-link non-active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20"
                }
              >
                About
              </a>
            </li>
          </Link>
          <Link to="/learn">
            <li>
              <a
                href="#learn"
                onClick={() => handlePageChange("Learn")}
                className={
                  currentPage === "Learn"
                    ? "nav-link active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20 "
                    : "nav-link non-active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20"
                }
              >
                Learn
              </a>
            </li>
          </Link>
          <Link to="/purchase">
            <li>
              <a
                href="#purchase"
                onClick={() => handlePageChange("Purchase")}
                className={
                  currentPage === "Purchase"
                    ? "nav-link active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20"
                    : "nav-link non-active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20"
                }
              >
                Purchase
              </a>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact"
                    ? "nav-link active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20 rounded-r-sm"
                    : "nav-link non-active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20 rounded-r-sm"
                }
              >
                Contact
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
