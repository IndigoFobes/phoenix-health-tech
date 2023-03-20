import React from "react";
import { Link } from "react-router-dom";
import PHTLogo from "../assets/PHT_LOGO_BLUE.png";
import PHTTitle from "../assets/PHT_TITLE_BLUE(2).png";

// py-3 2xl:py-4 px-6 md:px-12 2xl:px-20

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="flex flex-col items-center">
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
      {/* <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button> */}
      {/* Mobile / iPad toggle menu */}
      <div className="md:hidden relative w-3/4 justify-center mb-10">
        <input
          className="peer md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 z-10 opacity-0 cursor-pointer"
          type="checkbox"
        />
        {/* Arrow icon */}
        <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 transition-transform duration-600 rotate-0 peer-checked:rotate-180 w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
        <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full">
          <div className="m-5 mt-10 flex flex-col">
            <ul className="bg-gray-100 rounded-sm flex flex-col font-medium text-lg focus:title-text">
              <Link to="/home">
                <li
                  className={
                    currentPage === "Home"
                      ? "title-text font-bold bg-gray-300 text-center rounded-t-sm py-1"
                      : "text-black text-center py-1"
                  }
                >
                  <a
                    aria-current="page"
                    href="#home"
                    onClick={() => handlePageChange("Home")}
                  >
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
                >
                  <a href="#about" onClick={() => handlePageChange("About")}>
                    About
                  </a>
                </li>
              </Link>
              <Link to="/learn">
                <li
                  className={
                    currentPage === "Learn"
                      ? "title-text font-bold bg-gray-300 text-center py-1"
                      : "text-black text-center py-1"
                  }
                >
                  <a href="#learn" onClick={() => handlePageChange("Learn")}>
                    Learn
                  </a>
                </li>
              </Link>
              <Link to="/purchase">
                <li
                  className={
                    currentPage === "Purchase"
                      ? "title-text font-bold bg-gray-300 text-center py-1"
                      : "text-black text-center py-1"
                  }
                >
                  <a
                    href="#purchase"
                    onClick={() => handlePageChange("Purchase")}
                  >
                    Purchase
                  </a>
                </li>
              </Link>
              <Link to="/contact">
                <li
                  className={
                    currentPage === "Contact"
                      ? "title-text font-bold bg-gray-300 text-center rounded-b-sm py-1"
                      : "text-black text-center py-1"
                  }
                >
                  <a
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                  >
                    Contact
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Larger screen menu */}
      <div
        className="hidden my-8 md:grid grid-cols-6 w-5/6"
        id="navbar-default"
      >
        <ul className="col-start-2 col-end-6 grid grid-cols-5 border-none text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
          <Link to="/home">
            <li
              className={
                currentPage === "Home"
                  ? "nav-link active md:rounded-l-sm md:grid md:place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
                  : "nav-link non-active rounded-l-sm grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
              }
            >
              <a
                aria-current="page"
                href="#home"
                onClick={() => handlePageChange("Home")}
              >
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
            >
              <a href="#about" onClick={() => handlePageChange("About")}>
                About
              </a>
            </li>
          </Link>
          <Link to="/learn">
            <li
              className={
                currentPage === "Learn"
                  ? "nav-link active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
                  : "nav-link non-active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
              }
            >
              <a href="#learn" onClick={() => handlePageChange("Learn")}>
                Learn
              </a>
            </li>
          </Link>
          <Link to="/purchase">
            <li
              className={
                currentPage === "Purchase"
                  ? "nav-link active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
                  : "nav-link non-active grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
              }
            >
              <a href="#purchase" onClick={() => handlePageChange("Purchase")}>
                Purchase
              </a>
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={
                currentPage === "Contact"
                  ? "nav-link active rounded-r-sm grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
                  : "nav-link non-active rounded-r-sm grid place-items-center py-1 md:py-2 lg:py-3 2xl:py-4"
              }
            >
              <a href="#contact" onClick={() => handlePageChange("Contact")}>
                Contact
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
