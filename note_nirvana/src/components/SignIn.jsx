import React, { useContext, useState } from "react";
import validator from "validator";
import "./user.css";
import AuthContext from "./UserContext";

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
    } else {
      setMessage("Please check your password and email and try again.");
    }
  };
  // return (
  //   <div className="form-container">
  //     <section className="vh-100" style={{ backgroundClip: "#eeeeee" }}>
  //       <div className="container h-100">
  //         <div className="row d-flex justify-content-center align-items-center h-100">
  //           <div className="col-lg-12 col-xl-11" style={{ width: "40%" }}>
  //             <div className="card text-black" style={{ borderRadius: "25px" }}>
  //               <div className="card-body p-md-5">
  //                 <ul
  //                   className="nav nav-pills nav-justified mb-3"
  //                   id="ex1"
  //                   role="tablist"
  //                 >
  //                   <li className="nav-item" role="presentation">
  //                     <a
  //                       className="nav-link active"
  //                       id="tab-login"
  //                       // data-mdb-toggle="pill"
  //                       href="login"
  //                       role="tab"
  //                       aria-controls="pills-login"
  //                       aria-selected="true"
  //                     >
  //                       Login
  //                     </a>
  //                   </li>
  //                   <li className="nav-item" role="presentation">
  //                     <a
  //                       className="btn btn-light btn-outline-primary w-100 h-100"
  //                       id="tab-register"
  //                       // data-mdb-toggle="pill"
  //                       href="register"
  //                       role="tab"
  //                       aria-controls="pills-register"
  //                       aria-selected="false"
  //                     >
  //                       Register
  //                     </a>
  //                   </li>
  //                 </ul>

  //                 <div className="tab-content">
  //                   <div
  //                     className="tab-pane fade show active"
  //                     id="pills-login"
  //                     role="tabpanel"
  //                     aria-labelledby="tab-login"
  //                   >
  //                     <form>
  //                       {/* this is form for login */}
  //                       {/* <div className="text-center mb-3">
  //                         <p>Sign in with:</p>
  //                         <button
  //                           type="button"
  //                           className="btn btn-link btn-floating mx-1"
  //                         >
  //                           <i className="fab fa-facebook-f"></i>
  //                         </button>

  //                         <button
  //                           type="button"
  //                           className="btn btn-link btn-floating mx-1"
  //                         >
  //                           <i className="fab fa-google"></i>
  //                         </button>

  //                         <button
  //                           type="button"
  //                           className="btn btn-link btn-floating mx-1"
  //                         >
  //                           <i className="fab fa-twitter"></i>
  //                         </button>

  //                         <button
  //                           type="button"
  //                           className="btn btn-link btn-floating mx-1"
  //                         >
  //                           <i className="fab fa-github"></i>
  //                         </button>
  //                       </div>

  //                       <p className="text-center">or:</p> */}

  //                       <div className="form-outline mb-4">
  //                         <input
  //                           type="email"
  //                           id="loginName"
  //                           className="form-control"
  //                         />
  //                         <label className="form-label" htmlFor="loginName">
  //                           Email or username
  //                         </label>
  //                       </div>

  //                       <div className="form-outline mb-4">
  //                         <input
  //                           type="password"
  //                           id="loginPassword"
  //                           className="form-control"
  //                         />
  //                         <label className="form-label" htmlFor="loginPassword">
  //                           Password
  //                         </label>
  //                       </div>

  //                       <div className="row mb-4">
  //                         <div className="col-md-6 d-flex justify-content-center">
  //                           <div className="form-check mb-3 mb-md-0">
  //                             <input
  //                               className="form-check-input"
  //                               type="checkbox"
  //                               value=""
  //                               id="loginCheck"
  //                               defaultChecked="true"
  //                             />
  //                             <label
  //                               className="form-check-label"
  //                               htmlFor="loginCheck"
  //                             >
  //                               {" "}
  //                               Remember me{" "}
  //                             </label>
  //                           </div>
  //                         </div>

  //                         <div className="col-md-6 d-flex justify-content-center">
  //                           <a href="#!">Forgot password?</a>
  //                         </div>
  //                       </div>

  //                       <button
  //                         type="submit"
  //                         className="btn btn-primary btn-block mb-4 w-100"
  //                       >
  //                         Sign in
  //                       </button>

  //                       <div className="text-center">
  //                         <p>
  //                           Not a member? <a href="register">Register</a>
  //                         </p>
  //                       </div>
  //                     </form>
  //                   </div>
  //                   <div
  //                     className="tab-pane fade"
  //                     id="pills-register"
  //                     role="tabpanel"
  //                     aria-labelledby="tab-register"
  //                   >
  //                     <form>
  //                       <div className="text-center mb-3">
  //                         <p>Sign up with:</p>
  //                         <button
  //                           type="button"
  //                           className="btn btn-link btn-floating mx-1"
  //                         >
  //                           <i className="fab fa-facebook-f"></i>
  //                         </button>

  //                         <button
  //                           type="button"
  //                           className="btn btn-link btn-floating mx-1"
  //                         >
  //                           <i className="fab fa-google"></i>
  //                         </button>

  //                         <button
  //                           type="button"
  //                           className="btn btn-link btn-floating mx-1"
  //                         >
  //                           <i className="fab fa-twitter"></i>
  //                         </button>

  //                         <button
  //                           type="button"
  //                           className="btn btn-link btn-floating mx-1"
  //                         >
  //                           <i className="fab fa-github"></i>
  //                         </button>
  //                       </div>

  //                       <p className="text-center">or:</p>

  //                       <div className="form-outline mb-4">
  //                         <input
  //                           type="text"
  //                           id="registerName"
  //                           className="form-control"
  //                         />
  //                         <label className="form-label" htmlFor="registerName">
  //                           Name
  //                         </label>
  //                       </div>

  //                       <div className="form-outline mb-4">
  //                         <input
  //                           type="text"
  //                           id="registerUsername"
  //                           className="form-control"
  //                         />
  //                         <label
  //                           className="form-label"
  //                           htmlFor="registerUsername"
  //                         >
  //                           Username
  //                         </label>
  //                       </div>

  //                       <div className="form-outline mb-4">
  //                         <input
  //                           type="email"
  //                           id="registerEmail"
  //                           className="form-control"
  //                         />
  //                         <label className="form-label" htmlFor="registerEmail">
  //                           Email
  //                         </label>
  //                       </div>

  //                       <div className="form-outline mb-4">
  //                         <input
  //                           type="password"
  //                           id="registerPassword"
  //                           className="form-control"
  //                         />
  //                         <label
  //                           className="form-label"
  //                           htmlFor="registerPassword"
  //                         >
  //                           Password
  //                         </label>
  //                       </div>

  //                       <div className="form-outline mb-4">
  //                         <input
  //                           type="password"
  //                           id="registerRepeatPassword"
  //                           className="form-control"
  //                         />
  //                         <label
  //                           className="form-label"
  //                           htmlFor="registerRepeatPassword"
  //                         >
  //                           Repeat password
  //                         </label>
  //                       </div>

  //                       <div className="form-check d-flex justify-content-center mb-4">
  //                         <input
  //                           className="form-check-input me-2"
  //                           type="checkbox"
  //                           value=""
  //                           id="registerCheck"
  //                           defaultChecked="true"
  //                           aria-describedby="registerCheckHelpText"
  //                         />
  //                         <label
  //                           className="form-check-label"
  //                           htmlFor="registerCheck"
  //                         >
  //                           I have read and agree to the terms
  //                         </label>
  //                       </div>
  //                       <button
  //                           className="btn btn-primary btn-block mb-3"
  //                           type="submit"
  //                       >
  //                         Sign in
  //                       </button>
  //                     </form>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
  return (
    <>
      <div className="form-container">
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={submitHandler}
        >
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
          <p className="error-message">{message}</p>
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
            disabled={email.trim() === "" || password.trim() === ""}
            className="submit-btn"
          >
            Sign In
          </button>
        </form>
        <div style={{ textAlign: "center" }}>
          <label>Don't have an account?</label>
          <button
            className="button-like-link"
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
