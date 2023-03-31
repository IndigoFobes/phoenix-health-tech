import React, { useState, useEffect } from "react";
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
import Logo from "./components/Logo";
import ScrollToTop from "./components/ScrollToTop";
//import Home from "./pages/Home";

// import css, if used
import "./App.css";

// Stripe stuff??

// Listen for back button to handle page state
// const BackButtonListener = ({ currentPage, handlePageChange }) => {
//   const [clicked, setClicked] = useState(false);
//   useEffect(() => {
//     window.onpopstate = (e) => {
//       e.preventDefault();
//       setClicked(true);
//       console.log("State: ", clicked.toString());
//       // console.log(currentPage);
//       // handlePageChange(currentPage);
//     };
//   }, []);
//   if (clicked === true) {
//     handlePageChange(currentPage);
//   }
// };

const App = () => {
  // useState to set which page user is on
  const [currentPage, setCurrentPage] = useState("Landing");

  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    window.onpopstate = (e) => {
      e.preventDefault();
      setClicked(true);
      console.log("State: ", clicked.toString());
      console.log(currentPage);
      handlePageChange(currentPage);
    };
  }, []);

  // Scroll to top of page on page load
  function componentDidMount() {
    window.scrollTo(0, 0);
  }

  //handle page change; whichever page is plugged in here will be rendered
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // console.log(currentPage);
    componentDidMount();
  };

  const HomeLayout = () => (
    <>
      <Logo currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        setClicked={setClicked}
      />
      <Home
        className="flex"
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );

  const AboutLayout = () => (
    <>
      <Logo currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        setClicked={setClicked}
      />
      <About currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  );

  const LearnLayout = () => (
    <>
      <Logo currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        setClicked={setClicked}
      />
      <Learn currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  );

  const PurchaseLayout = () => (
    <>
      <Logo currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        setClicked={setClicked}
      />
      <Purchase
        className="flex"
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );

  const ContactLayout = () => (
    <>
      <Logo currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        setClicked={setClicked}
      />
      <ContactForm
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );

  const LandingLayout = () => (
    <>
      <Landing
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        setClicked={setClicked}
      />
    </>
  );

  return (
    <Router>
      {/* <ScrollToTop> */}
      <div>
        <main className="relative contentContainer">
          <Routes>
            <Route path="/" element={<LandingLayout />} />
            <Route path="/home" element={<HomeLayout />} />
            <Route path="/about" element={<AboutLayout />} />
            <Route path="/learn" element={<LearnLayout />} />
            <Route path="/purchase" element={<PurchaseLayout />} />
            <Route path="/contact" element={<ContactLayout />} />
          </Routes>
        </main>
        <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {/* </ScrollToTop> */}
    </Router>
  );
};

export default App;
