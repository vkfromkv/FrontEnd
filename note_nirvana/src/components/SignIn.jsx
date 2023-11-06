import React, { useContext, useState } from "react";
import validator from "validator";
import AuthContext from "./UserContext";
import ShowPassword from "./ShowPassword";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const ctx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const submitHandler = (event) => {
    event.preventDefault();
    if (validator.isEmail(email) == true && password.trim().length >= 8) {
      setMessage("");
      // check if the email and password are of an existing user and change their status to loggedin//
      axios
        .post("http://localhost:8081/login", {
          username: email,
          password: password,
        })
        .then((res) => {
          if (res.data.Status === "Success") {
            navigate("/");
          } else {
            alert("Please try again");
          }
        })
        .catch((err) => console.log(err));
    } else {
      setMessage("Please check your password and email and try again.");
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
          ></input>\
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
