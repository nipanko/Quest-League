// src/components/TaskList.js
import React, { useState } from "react";
import { Grid, Paper, Typography, Checkbox, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Play an outdoor game", completed: false },
    { id: 2, name: "Read a book for 30 minutes", completed: false },
    { id: 3, name: "Do a creative activity", completed: false },
    { id: 4, name: "Paint a tree", completed: false },
  ]);

  const handleTaskComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="main-content">
      <h2>Tasks to Complete</h2>
      <Grid container spacing={3}>
        {tasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Paper
              elevation={3}
              className={`task-item ${task.completed ? "task-completed" : ""}`}
            >
              <div className="task-content">
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleTaskComplete(task.id)}
                  className={`task-checkbox ${
                    task.completed ? "checkbox-completed" : ""
                  }`}
                />
                <Typography
                  variant="h6"
                  className={`task-name ${
                    task.completed ? "task-name-completed" : ""
                  }`}
                >
                  {task.name}
                </Typography>
              </div>
              {task.completed && (
                <div className="task-completed-animation">
                  <CheckCircleIcon color="success" />
                  <span className="task-points">+points</span>
                </div>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TaskList;