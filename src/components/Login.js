// src/components/Login.js
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { TextField, Button } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <TextField label="Email" variant="outlined" fullWidth onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: "10px" }} />
      <TextField label="Password" type="password" variant="outlined" fullWidth onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: "10px" }} />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

export default Login;
