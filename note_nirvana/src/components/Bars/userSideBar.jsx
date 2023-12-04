import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../userLogin/UserContext";
import axios from "axios";
const UserSideBar = ({ user, userId }) => {
  const ctx = useContext(AuthContext);

  axios.defaults.withCredentials = true;
  const handleDeleteToken= () =>  {
    axios
      .get("http://localhost:8081/Authentication/Logout")
      .then((res) => {
        console.log(res);
        ctx.setUserId(null);
        window.location.reload();
      })
      .then((err) => console.log(err));
  }

  return (
    <nav className="col-md-1.5 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column  pt-4">
          <li className="nav-item text-center">
            <Link className="nav-link" to="/user_profile">
              {user}
            </Link>
          </li>
          <li className="nav-item">
            <div className="spacer"></div>
          </li>
          <li className="nav-item text-center p-0">
            <Link className="nav-link" to="/publish">
            +Publish Tab
            </Link>
          </li>
          <li className="nav-item text-center mt-5">
            <button className="btn btn-danger" onClick={handleDeleteToken}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default UserSideBar;
