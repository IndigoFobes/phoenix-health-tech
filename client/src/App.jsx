import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import Landing from "./pages/Landing";
//import Home from "./pages/Home";

// import css, if used
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<PageContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;