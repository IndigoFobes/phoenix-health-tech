import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PHTLogo from "../assets/PHT_LOGO_noWORDS.png";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="static">
      {/* logo */}
      <div className="absolute top-0 left-10 w-1/6">
        <Link to="/">
          <img
            className="object-cover "
            src={PHTLogo}
            alt="PHT Logo, colorful phoenix"
          ></img>
        </Link>
      </div>
      {/* navbar */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
