import React from "react";
import { Link } from "react-router-dom";
import PHTLogo from "../assets/PHT_LOGO_BLUE.png";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="absolute top-5 left-5 2xl:left-10">
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
      </div>
      <nav className="flex w-4/5 mx-auto justify-center py-16 mb-10">
        <ul className="relative flex w-full flex-row border-none justify-center lg:ml-20 text-white font-semibold text-xl">
          <Link to="/home">
            <li>
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home"
                    ? "nav-link active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20 rounded-l-md text-blue-900"
                    : "nav-link bg-sky-400 py-3 2xl:py-4 px-6 md:px-12 rounded-l-md 2xl:px-20"
                }
              >
                Home
              </a>
            </li>
          </Link>
          <Link to="/home">
            <li>
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About"
                    ? "nav-link active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20 text-blue-900"
                    : "nav-link bg-sky-400 py-3 2xl:py-4 px-6 md:px-12 2xl:px-20"
                }
              >
                About
              </a>
            </li>
          </Link>
          <Link to="/home">
            <li>
              <a
                href="#learn"
                onClick={() => handlePageChange("Learn")}
                className={
                  currentPage === "Learn"
                    ? "nav-link active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20 text-blue-900"
                    : "nav-link bg-sky-400 py-3 2xl:py-4 px-6 md:px-12 2xl:px-20"
                }
              >
                Learn
              </a>
            </li>
          </Link>
          <Link to="/home">
            <li>
              <a
                href="#purchase"
                onClick={() => handlePageChange("Purchase")}
                className={
                  currentPage === "Purchase"
                    ? "nav-link active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20 text-blue-900"
                    : "nav-link bg-sky-400 py-3 2xl:py-4 px-6 md:px-12 2xl:px-20"
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
                    ? "nav-link active py-3 2xl:py-4 px-6 md:px-12 2xl:px-20 rounded-r-md text-blue-900"
                    : "nav-link bg-sky-400 py-3 2xl:py-4 px-6 md:px-12 2xl:px-20 rounded-r-md"
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
