import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { createClient } from "@supabase/supabase-js";
import "./Navbar.css";

const supabaseUrl = "https://zidvnydkwaqcjwcotqkh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZHZueWRrd2FxY2p3Y290cWtoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTU4NDMyMCwiZXhwIjoyMDE3MTYwMzIwfQ.Xi-3TyRQtV8WfeMIBz7ojwJA3TvcTrxk6bQgCrefpsY";
const supabase = createClient(supabaseUrl, supabaseKey);

function Navbar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/search');
        const responseData = await response.json();

        setData(responseData || []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
      <Link className="navbar-brand" to="/">
        Note Nirvana
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ms-5" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              List of Chords
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="ms-auto" style={{ maxWidth: "500px" }}>
          <div className="input-group">
          <input
  className="form-control"
  type="search"
  placeholder="Search"
  aria-label="Search"
  style={{ borderRadius: "20px", height: "40px", width: "300px", padding: "10px" }}
/>
            <div className="input-group-append">
              <button
  className="btn btn-outline-success rounded-circle"
  type="button"
  //onClick={handleSearch}
>
  <FontAwesomeIcon icon={faSearch} />
</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;