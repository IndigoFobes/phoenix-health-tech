import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home {"(nav)"}
          </a>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Navbar;
