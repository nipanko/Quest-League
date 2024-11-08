// src/components/Signup.js
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { TextField, Button } from "@mui/material";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup</h2>
      <TextField label="Email" variant="outlined" fullWidth onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: "10px" }} />
      <TextField label="Password" type="password" variant="outlined" fullWidth onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: "10px" }} />
      <Button variant="contained" color="primary" onClick={handleSignup}>
        Signup
      </Button>
    </div>
  );
}

export default Signup;
