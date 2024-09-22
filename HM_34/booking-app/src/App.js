import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hotels from "./pages/Hotels";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </Router>
  );
};

export default App;
