import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <Link to="/">
        <h1>Insert PHT logo and title here!</h1>
      </Link>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
