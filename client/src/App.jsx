import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import Landing from "./pages/Landing";
import ContactForm from "./components/ContactForm";
//import Home from "./pages/Home";

// import css, if used
import "./App.css";

// Stripe stuff??

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<PageContainer />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
