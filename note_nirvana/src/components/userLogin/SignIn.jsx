import React, { useContext, useState } from "react";
import validator from "validator";
import AuthContext from "./UserContext";
import ShowPassword from "./ShowPassword";
import axios from "axios";

const SignIn = () => {
  const ctx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const [visible, setVisible] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (validator.isEmail(email) == true && password.trim().length > 8) {
      setMessage("");
      // check if the email and password are of an existing user and change their status to loggedin//
      axios
        .post("http://localhost:8081/Authentication/Login", {
          username: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === 202) {
            setMessage("");
            ctx.setUserId(res.data.userId);
            ctx.setOpenModal(false);
            window.location.reload();
          } else {
            console.log(res);
            setMessage(res.data);
          }
        })
        .catch(() => {
          setMessage(
            "An error occurred. Please check your password and email and try again."
          );
        })
    } else {
      setMessage(
        "Please enter a valid email and password (at least 8 characters)."
      );
    }
  };
  return (
    <>
      <div className="d-flex flex-column gap-3 p-4">
        <form className="d-flex flex-column" onSubmit={submitHandler}>
          <input
            value={email}
            placeholder="Email"
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            style={{ marginBottom: "10px" }}
          ></input>
          <input
            value={password}
            type={visible === false ? "password" : "text"}
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
          <p className="text-danger small mb-3">{message}</p>
          <ShowPassword setVisible={setVisible} />
          <button
            type="submit"
            disabled={email.trim() === "" || password.trim() === ""}
            className="btn btn-primary font-weight-bold rounded p-2"
          >
            Sign In
          </button>
        </form>
        <div className="text-center">
          <label>Don't have an account?</label>
          <button
            className="btn btn-link text-primary m-2 w-50"
            onClick={() => {
              ctx.setDoesnot(false);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};
export default SignIn;
