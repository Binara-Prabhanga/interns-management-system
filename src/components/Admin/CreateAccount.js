import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Breadcrumbs,
  Typography,
  Link as MuiLink,
  Container,
  CssBaseline,
  Box,
  TextField,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import styles from "./Admin.module.css";


const CreateAccount = () => {
  const history = useHistory();
  const [companyName, setCompanyName] = useState("");

  const handleCreateAccount = () => {
    // Logic to create a new account for the company
    console.log("Creating account for:", companyName);
    // Add your logic to send data to the server or perform necessary actions
  };

  const customTheme = createTheme({
    // Define your theme here
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
          <MuiLink color="inherit" component={Link} to="/admin-create-account">
            Create Company Account
          </MuiLink>
        </Breadcrumbs>

        {/* Navigation Items */}
        <div className={styles["leftNavItems"]}>
          <Button
            variant="outlined"
            component={Link}
            to="/admin-create-account"
            className={styles["leftNavButtonHighlighted"]}
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
            className={styles["leftNavButton"]}
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
              Create Account
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateAccount();
              }}
              noValidate
              className={styles["createAccountBox2"]}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="university"
                label="Name"
                name="university"
                autoComplete="university"
                autoFocus
                value={companyName.university}
                onChange={(e) => setCompanyName(e.target.value)}
                className={styles["createAccountText"]}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={styles["submitButton"]}
              >
                Create a New Account
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};



export default CreateAccount;
