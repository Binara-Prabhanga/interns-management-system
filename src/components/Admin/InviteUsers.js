import React, { useState } from "react";
import {
  Button,
  Breadcrumbs,
  Typography,
  Link as MuiLink,
  Box,
  Container,
  CssBaseline,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { createTheme } from "@mui/material/styles";
import styles from "./Admin.module.css";

const InviteUsers = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const handleInviteUser = () => {
    console.log("Inviting user with email:", email);
    // logic
  };

  const handleLogout = () => {
    history.push("/login");
  };

  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#331C7A",
      },
      secondary: {
        main: "#FF615A",
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
            className={styles["leftNavButtonHighlighted"]}
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
              Invite Users
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleInviteUser();
              }}
              noValidate
              className={styles["createAccountBox2"]}
            >
              {/* Email */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles["createAccountText"]}
              />

              {/* Invite User Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={styles["submitButton"]}
              >
                Invite User
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default InviteUsers;
