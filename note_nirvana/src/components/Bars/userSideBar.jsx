import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../userLogin/UserContext";
const UserSideBar = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className="col-md-1.5 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column  pt-4">
          <li className="nav-item text-center">
            <p>{ctx.userEmail}</p>
          </li>
          <li className="nav-item">
            <div className="spacer"></div>
          </li>
          <li className="nav-item text-center p-0">
            <Link className="nav-link" to="/publish">
              +Publish Tab
            </Link>
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
};
export default UserSideBar;
