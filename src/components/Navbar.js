// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white" }}>
      <Link to="/" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Tasks</Link>
      <Link to="/upload" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Upload Task</Link>
      <Link to="/leaderboard" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Leaderboard</Link>
      <Link to="/login" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Login</Link>
      <Link to="/signup" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Signup</Link>
    </nav>
  );
}

export default Navbar;
