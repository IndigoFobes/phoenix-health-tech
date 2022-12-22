import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="bg-pink-200 flex p-3 justify-center">
      <ul className="flex flex-row gap-4">
        <li>
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#learn"
            onClick={() => handlePageChange("Learn")}
            className={currentPage === "Learn" ? "nav-link active" : "nav-link"}
          >
            Learn
          </a>
        </li>
        <li>
          <a
            href="#purchase"
            onClick={() => handlePageChange("Purchase")}
            className={
              currentPage === "Purchase" ? "nav-link active" : "nav-link"
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
              currentPage === "Contact" ? "nav-link active" : "nav-link"
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
