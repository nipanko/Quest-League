// src/components/TaskList.js
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

function TaskList() {
  const tasks = [
    { id: 1, name: "Play an outdoor game" },
    { id: 2, name: "Read a book for 30 minutes" },
    { id: 3, name: "Do a creative activity" },
  ];

  return (
    <div>
      <h2>Tasks to Complete</h2>
      <Grid container spacing={3}>
        {tasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Paper elevation={3} style={{ padding: "10px", textAlign: "center" }}>
              <Typography variant="h6">{task.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TaskList;
