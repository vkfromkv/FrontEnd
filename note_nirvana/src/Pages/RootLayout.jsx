import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Bars/Navbar";
import Sidebar from "../components/Bars/Sidebar";
import UserSideBar from "../components/Bars/userSideBar";
import AuthContext from "../components/userLogin/UserContext";
import axios from "axios";

const RootLayout = () => {
  const [hasAccount, setDoesnot] = useState(true);
  const [userEmail, setEmail] = useState("nikhilpittala7");
  const [LoggedIn, setLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState(null);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8081/Authentication/VerifyUser")
      .then((res) => {
        if (res.status === 202) {
          setIsAuthenticated(true);
          setUser(res.data);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          LoggedIn: LoggedIn,
          setLoggedIn: setLoggedIn,
          hasAccount: hasAccount,
          setDoesnot: setDoesnot,
          openModal: openModal,
          setOpenModal: setOpenModal,
          userEmail: userEmail,
          setEmail: setEmail,
          isAuthenticated: isAuthenticated,
          // searchSong: searchSong,
          // setSong: setSong,
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <div>
            <Navbar />
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            {isAuthenticated ? <UserSideBar user={user} /> : <Sidebar />}
            <main className="main-content col-md-10.5 p-5" style={{ flex: 1 }}>
              <Outlet></Outlet>
            </main>
          </div>
        </div>
      </AuthContext.Provider>
    </>
  );
};

export default RootLayout;
