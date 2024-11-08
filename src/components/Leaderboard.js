// src/components/Leaderboard.js
import React from "react";

function Leaderboard() {
  const users = [
    { id: 1, name: "Alice", points: 120 },
    { id: 2, name: "Bob", points: 100 },
    { id: 3, name: "Charlie", points: 80 },
  ];

  return (
    <div>
      <h2>Leaderboard</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Rank</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{index + 1}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
