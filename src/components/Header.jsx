import React from "react";
import Navbar from "./Navbar";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Insert PHT logo and title here!</h1>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
