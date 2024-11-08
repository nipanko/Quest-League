// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import TaskList from "./components/TaskList";
import TaskUpload from "./components/TaskUpload";
import Leaderboard from "./components/Leaderboard";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="main-content">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <IconButton
          onClick={toggleDarkMode}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/upload" element={<TaskUpload />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
