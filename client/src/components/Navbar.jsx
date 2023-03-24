import React from "react";
import { Link } from "react-router-dom";
import PHTLogo from "../assets/PHT_LOGO_BLUE.png";
import PHTTitle from "../assets/PHT_TITLE_BLUE(2).png";

// py-3 2xl:py-4 px-6 md:px-12 2xl:px-20

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="flex flex-col items-center">
      {/* <div className="w-1/3 mt-5">
        <Link to="/" target="blank">
          <img src={PHTTitle} alt="Phoenix Health Technology"></img>
        </Link>
      </div> */}
      {/* Mobile / iPad toggle menu */}
      <div className="md:hidden flex flex-col items-center w-full bg-white">
        <h4 className="font-bold title-text mt-2">Menu</h4>
        <div className="relative w-3/4 justify-center mb-6">
          <input
            className="peer md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 z-10 opacity-0 cursor-pointer"
            type="checkbox"
          />
          {/* Arrow icon */}
          <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 transition-transform duration-400 rotate-0 peer-checked:rotate-180 w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#0E4370"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {/* Mobile menu content */}
          <div className="overflow-hidden transition peer-checked:translate-y-3 duration-700 ease-in-out max-h-0 peer-checked:max-h-full">
            <div className="m-5 pt-3 flex flex-col">
              <ul className="bg-gray-100 rounded-sm flex flex-col font-medium text-lg focus:title-text shadow-md shadow-gray-300/50">
                <Link to="/home">
                  <li
                    className={
                      currentPage === "Home"
                        ? "title-text font-bold bg-gray-300 text-center rounded-t-sm py-1"
                        : "text-black text-center py-1"
                    }
                    onClick={() => handlePageChange("Home")}
                  >
                    <a aria-current="page" href="#home">
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="/about">
                  <li
                    className={
                      currentPage === "About"
                        ? "title-text font-bold bg-gray-300 text-center py-1"
                        : "text-black text-center py-1"
                    }
                    onClick={() => handlePageChange("About")}
                  >
                    <a href="#about">About</a>
                  </li>
                </Link>
                <Link to="/learn">
                  <li
                    className={
                      currentPage === "Learn"
                        ? "title-text font-bold bg-gray-300 text-center py-1"
                        : "text-black text-center py-1"
                    }
                    onClick={() => handlePageChange("Learn")}
                  >
                    <a href="#learn">Learn</a>
                  </li>
                </Link>
                <Link to="/purchase">
                  <li
                    className={
                      currentPage === "Purchase"
                        ? "title-text font-bold bg-gray-300 text-center py-1"
                        : "text-black text-center py-1"
                    }
                    onClick={() => handlePageChange("Purchase")}
                  >
                    <a href="#purchase">Purchase</a>
                  </li>
                </Link>
                <Link to="/contact">
                  <li
                    className={
                      currentPage === "Contact"
                        ? "title-text font-bold bg-gray-300 text-center rounded-b-sm py-1"
                        : "text-black text-center py-1"
                    }
                    onClick={() => handlePageChange("Contact")}
                  >
                    <a href="#contact">Contact</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Larger screen menu */}
      <div
        className="hidden md:grid grid-cols-6 w-full nav-bg"
        id="navbar-default"
      >
        <ul className="col-start-2 col-end-6 grid grid-cols-5 border-none text-white dm-sans-med text-sm sm:text-base md:text-lg lg:text-xl">
          <Link to="/home">
            <li
              className={`nav-link grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4 ${
                currentPage === "Home" ? "active" : "non-active"
              }`}
              onClick={() => handlePageChange("Home")}
            >
              <a aria-current="page" href="#home">
                Home
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li
              className={
                currentPage === "About"
                  ? "nav-link active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
                  : "nav-link non-active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
              }
              onClick={() => handlePageChange("About")}
            >
              <a href="#about">About</a>
            </li>
          </Link>
          <Link to="/learn">
            <li
              className={
                currentPage === "Learn"
                  ? "nav-link active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
                  : "nav-link non-active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
              }
              onClick={() => handlePageChange("Learn")}
            >
              <a href="#learn">Learn</a>
            </li>
          </Link>
          <Link to="/purchase">
            <li
              className={
                currentPage === "Purchase"
                  ? "nav-link active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
                  : "nav-link non-active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
              }
              onClick={() => handlePageChange("Purchase")}
            >
              <a href="#purchase">Purchase</a>
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={
                currentPage === "Contact"
                  ? "nav-link active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
                  : "nav-link non-active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
              }
              onClick={() => handlePageChange("Contact")}
            >
              <a href="#contact">Contact</a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
