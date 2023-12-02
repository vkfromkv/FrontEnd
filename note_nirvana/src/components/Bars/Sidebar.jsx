import React, { useState } from "react";
import { Link } from "react-router-dom";

import User from "../userLogin/User";

import AuthContext from "../userLogin/UserContext";

function Sidebar() {
  const [hasAccount, setDoesnot] = useState(true);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        LoggedIn: LoggedIn,
        setLoggedIn: setLoggedIn,
        hasAccount: hasAccount,
        setDoesnot: setDoesnot,
      }}
    >
      <nav
        className="col-md-2 d-none d-md-block bg-light sidebar  "
        style={{ maxWidth: "180px" }}
      >
        <div className="sidebar-sticky">
          <ul className="nav flex-column p-2 pt-4">
            <li className="nav-item ">
              <button
                className="btn btn-primary w-100"
                type="submit"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Sign In
              </button>
              {openModal && (
                <User closeModal={setOpenModal} hasAccount={hasAccount}></User>
              )}
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
    </AuthContext.Provider>
  );
}

export default Sidebar;