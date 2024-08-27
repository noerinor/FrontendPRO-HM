import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import ErrorBoundary from "./components/ErrorBoundary";
import './index.css'

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
