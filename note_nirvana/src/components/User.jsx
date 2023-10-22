import React, { useContext } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AuthContext from "./UserContext";
import "./user.css";

const User = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div className="Modalbackground">
      <div className="Modalcontainer">
        <div className="closebtn">
          <button
            onClick={() => {
              props.closeModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="form">{ctx.hasAccount ? <SignIn /> : <SignUp />}</div>
      </div>
    </div>
  );
};
export default User;
