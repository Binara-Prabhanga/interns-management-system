// src/components/Registration.js
import React, { useState } from "react";
import axios from "axios";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { createTheme } from "@mui/material/styles";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async () => {
    try {
      // Sending data to the backend
      const response = await axios.post("http://localhost:3001/user/register", {
        email,
        password,
      });
      // Success
      console.log("Registration successful", response.data);
    } catch (error) {
      // Unsuccessful
      console.error("Registration failed", error.message);
    }
  };

  const handleSSOLogin = () => {
    // Single Sign-On (SSO)
  };

  // Create a theme
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#3a5a40",
      },
      secondary: {
        main: "#588157",
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PersonAddOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: "#3a5a40" }}>
            Create an Account
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="button"
              onClick={handleRegistration}
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#3a5a40",
                color: "white",
              }}
            >
              Register
            </Button>
          </Box>
          <Typography
            sx={{ marginTop: "20px", fontSize: "14px", color: "#3a5a40" }}
          >
            Or register with:
          </Typography>
          <Button
            type="button"
            onClick={handleSSOLogin}
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 2, backgroundColor: "#588157", color: "white" }}
          >
            Sign Up with Google
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Registration;
