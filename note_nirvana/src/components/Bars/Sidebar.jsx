import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import User from "../userLogin/User";

import AuthContext from "../userLogin/UserContext";

function Sidebar() {
  const ctx = useContext(AuthContext);

  return (
    <nav className="sidebar custom-sidebar d-none d-md-block bg-light">
      <div className="sidebar-sticky">
        <ul className="nav flex-column  pt-4">
          <li className="nav-item ">
            <button
              className="btn btn-primary w-100"
              type="submit"
              onClick={() => {
                ctx.setOpenModal(true);
              }}
            >
              Sign In
            </button>
            {ctx.openModal && <User></User>}
          </li>
          <li className="nav-item">
            <div className="spacer"></div>
          </li>
          <li className="nav-item text-center">
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
