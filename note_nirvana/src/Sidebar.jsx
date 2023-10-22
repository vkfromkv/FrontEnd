import React, { useState } from "react";
import { Link } from "react-router-dom";

import User from "./components/User";

import AuthContext from "./components/UserContext";

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
      <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
        <div className="position-sticky">
          <>
            <Link to="/" className="top-element non-link">
              <p className="top-element-text">Note Nirvana</p>
            </Link>
            <ul className="nav flex-column" style={{ marginTop: "20px" }}>
              <li className="nav-item">
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
                  <User
                    closeModal={setOpenModal}
                    hasAccount={hasAccount}
                  ></User>
                )}
              </li>
              <li className="nav-item">
                <div className="spacer"></div>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Forums
                </a>
              </li>
            </ul>
          </>
        </div>
      </nav>
    </AuthContext.Provider>
  );
}

export default Sidebar;
