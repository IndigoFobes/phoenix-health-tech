import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Landing from "./pages/Landing";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import About from "../src/pages/About";
// import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";
import Learn from "../src/pages/Learn";
import Purchase from "../src/pages/Purchase";
import Footer from "../src/components/Footer";
import { Link } from "react-router-dom";
import PHTTitle from "./assets/PHT_TITLE_BLUE(2).png";

//import Home from "./pages/Home";

// import css, if used
import "./App.css";

// Stripe stuff??

const App = () => {
  // useState to set which page user is on
  const [currentPage, setCurrentPage] = useState("Home");

  //handle page change; whichever page is plugged in here will be rendered
  const handlePageChange = (page) => setCurrentPage(page);

  const HomeLayout = () => (
    <>
      <div className="w-full flex flex-col items-center mb-8">
        <div className="w-1/3 mt-5 flex">
          <Link to="/" target="blank">
            <img src={PHTTitle} alt="Phoenix Health Technology"></img>
          </Link>
        </div>
      </div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Home className="flex" />
    </>
  );

  const AboutLayout = () => (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <About />
    </>
  );

  const LearnLayout = () => (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Learn />
    </>
  );

  const PurchaseLayout = () => (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Purchase className="flex" />
    </>
  );

  const ContactLayout = () => (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <ContactForm />
    </>
  );

  return (
    <Router>
      <div>
        <main className="relative contentContainer">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<HomeLayout />} />
            <Route path="/about" element={<AboutLayout />} />
            <Route path="/learn" element={<LearnLayout />} />
            <Route path="/purchase" element={<PurchaseLayout />} />
            <Route path="/contact" element={<ContactLayout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
