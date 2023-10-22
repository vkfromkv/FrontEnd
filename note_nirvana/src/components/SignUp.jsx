import React, { useContext, useState } from "react";
import validator from "validator";
import "./user.css";
import AuthContext from "./UserContext";

const SignUp = () => {
  const ctx = useContext(AuthContext);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (validator.isEmail(newEmail) == true) {
      if (newPassword.trim().length < 8 || confirmPassword.trim().length < 8) {
        setError("Use 8 characters or more for your password");
      } else {
        if (newPassword === confirmPassword) {
          setError("");
          // add email and password of a new user in database //
        } else {
          setError("those passwords didn't match.Try again.");
        }
      }
    } else {
      setError("Please enter a valid email address");
    }
  };

  return (
    <div className="form-container">
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={submitHandler}
      >
        <input
          placeholder="Email"
          type="text"
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
          style={{ marginBottom: "10px" }}
        ></input>
        <input
          placeholder="Password"
          type={visible === false ? "password" : "text"}
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
          style={{ marginBottom: "10px" }}
        ></input>
        <input
          placeholder="Confirm Password"
          type={visible === false ? "password" : "text"}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        ></input>
        <p className="error-message">{error}</p>
        <div>
          <input
            type="checkbox"
            onChange={(event) => {
              setVisible(event.target.checked);
            }}
          ></input>
          <label style={{ paddingLeft: "5px" }}>Show password</label>
        </div>
        <button
          type="submit"
          disabled={
            newEmail.trim() === "" ||
            newPassword.trim() === "" ||
            confirmPassword.trim() === ""
          }
          className="submit-btn"
        >
          Sign Up
        </button>
      </form>
      <div style={{ textAlign: "center" }}>
        <label>Already have an account?</label>
        <button
          className="button-like-link"
          onClick={() => {
            ctx.setDoesnot(true);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default SignUp;
