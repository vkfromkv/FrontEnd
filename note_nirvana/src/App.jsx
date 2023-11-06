import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import SampleText from "./components/SampleText.jsx";
import Sidebar from "./Sidebar";
import About from "./About";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="d-flex justify-content-center">
        <div style={{ maxWidth: "800px" }} className="text-left p-3 m-0">
          <Navbar />

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/" element={<SampleText />} />
          </Routes>

          <Sidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
