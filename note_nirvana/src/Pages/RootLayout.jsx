import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Bars/Navbar";
import Sidebar from "../components/Bars/Sidebar";
import UserSideBar from "../components/Bars/userSideBar";
import AuthContext from "../components/userLogin/UserContext";

const RootLayout = () => {
  const [hasAccount, setDoesnot] = useState(true);
  const [userEmail, setEmail] = useState("nikhilpittala7");
  const [LoggedIn, setLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <div>
            <Navbar />
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            {/* <UserSideBar></UserSideBar> */}
            <Sidebar/>
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
