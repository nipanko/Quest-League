// src/components/Leaderboard.js
import React, { useState, useEffect } from "react";
import { Paper, Typography, Fade, Box } from "@mui/material";
import "./Leaderboard.css";

function Leaderboard() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", points: 120 },
    { id: 2, name: "Bob", points: 100 },
    { id: 3, name: "Charlie", points: 80 },
    { id: 4, name: "David", points: 75 },
    { id: 5, name: "Eve", points: 70 },
    { id: 6, name: "Frank", points: 65 },
    { id: 7, name: "Gina", points: 60 },
    { id: 8, name: "Henry", points: 55 },
    { id: 9, name: "Isabelle", points: 50 },
    { id: 10, name: "Jack", points: 45 },
  ]);

  useEffect(() => {
    setUsers((prevUsers) =>
      [...prevUsers].sort((a, b) => b.points - a.points)
    );
  }, []);

  const getEmoji = (index) => {
    switch (index) {
      case 0:
        return "🏆"; // First place
      case 1:
        return "🥈"; // Second place
      case 2:
        return "🥉"; // Third place
      default:
        return "🎖️"; // Others
    }
  };

  return (
    <div className="main-content">
      <h2>Leaderboard</h2>
      <Box className="leaderboard-container">
        {users.map((user, index) => (
          <Fade in timeout={300 * (index + 1)} key={user.id}>
            <Paper
              className={`leaderboard-item ${index === 0 ? "first-place" : ""}`}
              elevation={3}
            >
              <div className="leaderboard-rank">
                <Typography variant="h5" className="rank-text">
                  {getEmoji(index)}
                </Typography>
              </div>
              <div className="leaderboard-details">
                <Typography variant="h6" className="user-name">
                  {user.name}
                </Typography>
                <Typography variant="subtitle1" className="user-points">
                  {user.points} pts
                </Typography>
              </div>
            </Paper>
          </Fade>
        ))}
      </Box>
    </div>
  );
}

export default Leaderboard;
