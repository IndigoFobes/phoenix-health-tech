import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PHTLogo from "../assets/PHT_LOGO_noWORDS.png";
import BackButtonListener from "../App";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="sticky top-0 z-10">
      {/* navbar */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
