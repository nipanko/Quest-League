// src/components/TaskList.js
import React from "react";

function TaskList() {
  const tasks = [
    { id: 1, name: "Play an outdoor game" },
    { id: 2, name: "Read a book for 30 minutes" },
    { id: 3, name: "Do a creative activity" },
  ];

  return (
    <div>
      <h2>Tasks to Complete</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ddd" }}>
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
