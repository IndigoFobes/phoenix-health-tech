import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PHTLogo from "../assets/PHT_LOGO_noWORDS.png";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="">
      {/* logo */}
      {/* <div className="absolute top-10 left-10 w-40">
        <Link to="/">
          <img
            className="object-cover "
            src={PHTLogo}
            alt="PHT Logo, colorful phoenix"
          ></img>
        </Link>
      </div> */}
      {/* navbar */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
