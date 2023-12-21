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
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { createTheme } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin"); 
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!name.trim()) {
      errors.name = "Name is required";
    }

    // Validate email
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    // Validate password
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleRegistration = async () => {
    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    try {
      // Sending data to the backend
      const response = await axios.post("http://localhost:3001/user/register", {
        name,
        email,
        password,
        role,
      });
      // Success
      console.log("Registration successful", response.data);
      // Redirect based on the user's role
      const userRole = response.data.user.role;
      if (userRole === "Admin" || userRole === "Manager") {
        history.push("/");
      } else if (userRole === "Evaluator") {
        history.push("/evaluator-dashboard");
      } else {
        history.push("/intern-dashboard");
      }
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
        main: "#331C7A",
      },
      secondary: {
        main: "#FF615A",
      },
      complementary: {
        purple: "#6954FA",
        deepBlue: "#482890",
      },
      neutral: {
        white: "#ffffff",
        lightGray: "#f8f9fa",
      },
      additional: {
        lighterBlue: "#ecf0f1",
        red: "#e74c3c",
        lightBeige: "#dad7cd",
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
          <Avatar sx={{ m: 1, bgcolor: customTheme.palette.secondary.main }}>
            <PersonAddOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: customTheme.palette.primary.main }}
          >
            Create an Account
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name ? true : false}
              helperText={errors.name}
            />
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
              error={setErrors.email ? true : false}
              helperText={setErrors.email}
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
              error={setErrors.password ? true : false}
              helperText={setErrors.password}
            />
            <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                value={role}
                label="Role"
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Mentor">Mentor</MenuItem>
                <MenuItem value="Evaluator">Evaluator</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="button"
              onClick={handleRegistration}
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: customTheme.palette.primary.main,
                color: "white",
              }}
            >
              Register
            </Button>
          </Box>
          <Typography
            sx={{
              marginTop: "20px",
              fontSize: "14px",
              color: customTheme.palette.primary.main,
            }}
          >
            Or register with:
          </Typography>
          <Button
            type="button"
            onClick={handleSSOLogin}
            fullWidth
            variant="contained"
            color="secondary"
            sx={{
              mt: 2,
              backgroundColor: customTheme.palette.secondary.main,
              color: "white",
            }}
          >
            Sign Up with Google
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Registration;
