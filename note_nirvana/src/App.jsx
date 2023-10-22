import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SampleText from "./components/SampleText.jsx";
import Sidebar from "./Sidebar"; // Make sure the import path is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      {/* Top Navbar */}
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
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Content */}
      <div className="content-container">
        <Sidebar />
        <main className="main-content">
          <SampleText />
        </main>
      </div>
    </div>
  );
}

export default App;