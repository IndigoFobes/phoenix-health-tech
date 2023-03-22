import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PHTLogo from "../assets/PHT_LOGO_noWORDS.png";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="fixed top-0 bg-white z-10">
      {/* navbar */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
