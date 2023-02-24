import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Learn from "../pages/Learn";
import Purchase from "../pages/Purchase";
import ContactForm from "./ContactForm";

export default function PageContainer() {
  // useState to set which page user is on
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home className="flex" />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Landing") {
      return <Landing />;
    } else if (currentPage === "Learn") {
      return <Learn />;
    }
    return <Purchase />;
  };

  //handle page change; whichever page is plugged in here will be rendered
  const handlePageChange = (page) => setCurrentPage(page);

  // return
  return (
    <div>
      <main className="relative min-h-screen">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <div className="App mt-20">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
