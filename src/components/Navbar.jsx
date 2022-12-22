import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="flex w-4/5 mx-auto justify-center py-10">
      <ul className="flex flex-row w-full border-none justify-center text-white font-semibold text-xl">
        <li>
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={
              currentPage === "Home"
                ? "nav-link active py-3 px-12 text-blue-900"
                : "nav-link bg-sky-400 py-3 px-12"
            }
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={
              currentPage === "About"
                ? "nav-link active py-3 px-12 text-blue-900"
                : "nav-link bg-sky-400 py-3 px-12"
            }
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#learn"
            onClick={() => handlePageChange("Learn")}
            className={
              currentPage === "Learn"
                ? "nav-link active py-3 px-12 text-blue-900"
                : "nav-link bg-sky-400 py-3 px-12"
            }
          >
            Learn
          </a>
        </li>
        <li>
          <a
            href="#purchase"
            onClick={() => handlePageChange("Purchase")}
            className={
              currentPage === "Purchase"
                ? "nav-link active py-3 px-12 text-blue-900"
                : "nav-link bg-sky-400 py-3 px-12"
            }
          >
            Purchase
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact"
                ? "nav-link active py-3 px-12 text-blue-900"
                : "nav-link bg-sky-400 py-3 px-12"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
