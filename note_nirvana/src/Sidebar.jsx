import React from "react";
import { Link } from "react-router-dom"; 

function Sidebar() {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky">
        <div className="top-element">
          <Link to="/" className="top-element-text note-nirvana-link">
            Note Nirvana
          </Link>
        </div>
        <ul className="nav flex-column" style={{ marginTop: "20px" }}>
          <li className="nav-item">
            <Link to="/about" className="nav-link active">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <div className="spacer"></div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Forums
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
