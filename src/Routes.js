import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NoMatch from "./components/NoMatch";
import Header from "./components/Header";

const Routess = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default Routess;
