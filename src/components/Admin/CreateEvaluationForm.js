// CreateEvaluationForm.js
import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Admin.module.css";

const CreateEvaluationForm = () => {
  const [criteria, setCriteria] = useState("");
  const [rating, setRating] = useState("");
  const [weight, setWeight] = useState("");

  const handleCreateForm = () => {
    console.log("Evaluation form created:", { criteria, rating, weight });
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
    <div className={styles["wholeComponent"]}>
      {/* Left Navigation Bar */}
      <div className={styles["leftNav"]}>
        {/* Heading */}
        <Typography variant="h5" className={styles["heading"]}>
          Admin Dashboard
        </Typography>

        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" className={styles["breadcrumbs"]}>
          <MuiLink color="inherit" component={Link} to="/">
            Home
          </MuiLink>
          <MuiLink color="inherit" component={Link} to="/admin-invite-users">
            Invite Users
          </MuiLink>
        </Breadcrumbs>

        {/* Navigation Items */}
        <div className={styles["leftNavItems"]}>
          <Button
            variant="outlined"
            component={Link}
            to="/admin-create-account"
            className={styles["leftNavButton"]}
          >
            <FontAwesomeIcon
              icon={faBuilding}
              className={styles["leftNavIcon"]}
            />
            Create Company Account
          </Button>

          <Button
            variant="outlined"
            component={Link}
            to="/admin-invite-users"
            className={styles["leftNavButton"]}
          >
            <FontAwesomeIcon
              icon={faUserPlus}
              className={styles["leftNavIcon"]}
            />
            Invite Users
          </Button>

          <Button
            variant="outlined"
            component={Link}
            to="/admin-create-intern"
            className={styles["leftNavButton"]}
          >
            <FontAwesomeIcon
              icon={faUserPlus}
              className={styles["leftNavIcon"]}
            />
            Create Intern Profile
          </Button>

          <Button
            variant="outlined"
            component={Link}
            to="/admin-upgrade-downgrade"
            className={styles["leftNavButton"]}
          >
            <FontAwesomeIcon
              icon={faBuilding}
              className={styles["leftNavIcon"]}
            />
            Upgrade/Downgrade Permission
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/admin-evaluation-form"
            className={styles["leftNavButtonHighlighted"]}
          >
            <FontAwesomeIcon
              icon={faBuilding}
              className={styles["leftNavIcon"]}
            />
            Create Evaluation Form
          </Button>
        </div>
      </div>
      {/* Main Content */}
      <ThemeProvider theme={customTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box className={styles["cAMainBox"]}>
            <Typography
              component="h1"
              variant="h5"
              className={styles["typography"]}
            >
              Create Evaluation Form
            </Typography>
            <Box
              component="form"
              noValidate
              className={styles["createAccountBox2"]}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="criteria"
                label="Evaluation Criteria"
                name="criteria"
                autoComplete="criteria"
                autoFocus
                value={criteria}
                onChange={(e) => setCriteria(e.target.value)}
                className={styles["createAccountText"]}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="number"
                inputProps={{ min: 1, max: 5 }}
                id="rating"
                label="Rating (1-5)"
                name="rating"
                autoComplete="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className={styles["createAccountText"]}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="number"
                id="weight"
                label="Weight"
                name="weight"
                autoComplete="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={styles["createAccountText"]}
              />
              <Button
                type="button"
                onClick={handleCreateForm}
                fullWidth
                variant="contained"
                className={styles["submitButton"]}
              >
                Create Form
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default CreateEvaluationForm;
