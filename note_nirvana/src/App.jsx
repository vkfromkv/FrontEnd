import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SampleText from "./components/SampleText.jsx";
import Sidebar from "./Sidebar";
import About from "./About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <div className="app-container">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">List of Chords</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">List of Songs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
          <Route path="/about" element={<About />} />
      </Routes>

      <div className="content-container">
        <Sidebar />
        <main className="main-content">
         {location.pathname !== '/about' && <SampleText />}
        </main>
      </div>
    </div>
    </Router>
  );
}

export default App;