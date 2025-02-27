import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Payroll Modules</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/time-tracker">Time Tracker</Link>
        </li>
        <li>
          <Link to="/trs-calculator">TRS Calculator</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
