// src/components/TaskUpload.js
import React, { useState } from "react";

function TaskUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      // Upload function here (to be implemented)
      console.log("Uploading:", file);
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <div className="main-content">
      <h2>Upload Task Proof</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white" }}>
        Upload
      </button>
    </div>
  );
}

export default TaskUpload;
