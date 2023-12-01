import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import User from "../userLogin/User";

import AuthContext from "../userLogin/UserContext";

function Sidebar() {
  const ctx = useContext(AuthContext);
  const [user, setUser] = useState("Kaka");

  return (
    <nav className="sidebar col-md-1.5 d-none d-md-block bg-light">
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
            <a className="nav-link" href="/user_profile">
              Hi, {user}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
