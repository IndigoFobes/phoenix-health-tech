import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PHTLogo from "../assets/phoenix_title.png";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="flex flex-row justify-center">
      <div>
        <Link to="/">
          <div className="absolute top-0 left-20">
            <h1>To landing page</h1>
            {/* <img
              className="w-1/4 align-middle object-cover "
              src={PHTLogo}
              alt="PHT Logo, colorful phoenix"
            ></img> */}
          </div>
        </Link>
      </div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
