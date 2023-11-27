import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Bars/Navbar";
import Sidebar from "../src/components/Bars/Sidebar";
const RootLayout = () => {
  return (
    <>
      <div
        className="container-fluid m-0 p-0 "
        style={{ maxWidth: "1500px", height: "100vh" }}
      >
        <div>
          <Navbar />
        </div>
        <div className="container-fluid m-0 p-0 h-100">
          <div className="row h-100">
            <Sidebar></Sidebar>

            <main className="main-content col-md-10 p-5">
              <Outlet></Outlet>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default RootLayout;
