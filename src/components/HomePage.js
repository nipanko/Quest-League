// src/components/HomePage.js
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { Button, Avatar, Typography, IconButton, Grid, Box } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { CSSTransition } from "react-transition-group";
import "./HomePage.css";

function HomePage() {
  const [user] = useAuthState(auth);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  const handleStartListening = () => {
    setListening(true);
    recognition.start();
  };

  const handleStopListening = () => {
    setListening(false);
    recognition.stop();
  };

  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    setTranscript(speechToText);
  };

  recognition.onend = () => setListening(false);

  return (
    <div className="home-page-container">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box className="welcome-section">
            <Typography variant="h4" gutterBottom>
              {user ? `Welcome, ${user.displayName || "User"}!` : "Welcome to Quest League"}
            </Typography>

            <div className="speech-recognition-container">
              <IconButton
                color="primary"
                onClick={listening ? handleStopListening : handleStartListening}
              >
                {listening ? <MicOffIcon /> : <MicIcon />}
              </IconButton>
              <Typography variant="subtitle1" className="listening-text">
                {listening ? "Listening..." : "Click to start speaking"}
              </Typography>
              <CSSTransition
                in={Boolean(transcript)}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <Typography variant="h6" color="textSecondary" className="transcript">
                  {transcript || "Your speech will appear here"}
                </Typography>
              </CSSTransition>
            </div>

            {user ? (
              <Avatar
                alt={user.displayName || "User"}
                src={user.photoURL}
                className="user-avatar"
              />
            ) : (
              <div className="auth-buttons">
                <Button variant="contained" color="primary" href="/login" className="auth-button">
                  Login
                </Button>
                <Button variant="contained" color="secondary" href="/signup" className="auth-button">
                  Signup
                </Button>
              </div>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="image-section">
            <img
              src="/banner.jpeg"
              alt="Quest League"
              className="quest-league-image"
            />
            <Typography variant="h5" className="image-text">
              Embark on an adventure with Quest League
            </Typography>
          </Box>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default HomePage;