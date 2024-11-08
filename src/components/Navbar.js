// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { Avatar, Button, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";

function Navbar() {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="navbar-content">
        <Typography variant="h6" component="div" className="navbar-title">
          Quest League
        </Typography>
        <nav className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/tasks" className="navbar-link">Tasks</Link>
          <Link to="/upload" className="navbar-link">Upload Task</Link>
          <Link to="/leaderboard" className="navbar-link">Leaderboard</Link>
        </nav>

        {user ? (
          <div className="navbar-user-actions">
            <Avatar alt={user.displayName || "User"} src={user.photoURL} className="navbar-user-avatar" />
            <IconButton onClick={handleLogout} color="inherit" className="navbar-logout-button">
              <LogoutIcon />
            </IconButton>
          </div>
        ) : (
          <div className="navbar-auth-buttons">
            <Button color="inherit" href="/login" className="navbar-auth-button">Login</Button>
            <Button color="inherit" href="/signup" className="navbar-auth-button">Signup</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;