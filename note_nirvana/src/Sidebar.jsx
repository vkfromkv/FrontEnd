import React from "react";

function Sidebar() {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky">
        <>
          <div className="top-element">
            <p className="top-element-text">Note Nirvana</p>
          </div>
          <ul className="nav flex-column" style={{ marginTop: "20px" }}>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Sign Up
              </a>
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
        </>
      </div>
    </nav>
  );
}

export default Sidebar;