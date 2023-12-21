import React, { useState } from "react";
import {
  Button,
  Breadcrumbs,
  Typography,
  Link as MuiLink,
  Box,
  Container,
  CssBaseline,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import { Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./Admin.module.css";

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

const UpgradeDowngradePermission = () => {
  const history = useHistory();
  const [userType, setUserType] = useState("Mentor");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpgradeDowngrade = (type) => {
    setActionType(type);
    setShowConfirmationModal(true);
  };

  const handleConfirmation = () => {
    console.log(`User type: ${userType}, Action: ${actionType}`);

    // Close the confirmation modal
    setShowConfirmationModal(false);
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
  };

  const handleLogout = () => {
    history.push("/login");
  };

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    width: "300px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  };

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
            className={styles["leftNavButtonHighlighted"]}
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

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/admin-upgrade-downgrade"
            >
              Admin
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/manager-upgrade-downgrade"
            >
              Manager
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/evaluator-upgrade-downgrade"
            >
              Evaluator
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/mentor-upgrade-downgrade"
            >
              Mentor
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/intern-upgrade-downgrade"
            >
              Intern
            </MenuItem>
          </Menu>
        </div>
      </div>

      {/* Main Content */}
      <ThemeProvider theme={customTheme}>
        <Container component="main" maxWidth="parent">
          <CssBaseline />
          <Box className={styles["cAMainBox"]}>
            <Typography
              component="h2"
              variant="h5"
              className={styles["typography"]}
            >
              Upgrade/Downgrade Permission Levels
            </Typography>
            <Box component="div" className={styles["createAccountBox2"]}>
              {/* User Type Dropdown */}
              <label>
                User Type:
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="Mentor">Mentor</option>
                  <option value="Admin">Admin</option>
                  <option value="Intern">Intern</option>
                </select>
              </label>
              <br />

              {/* Upgrade Button */}
              <Button
                variant="contained"
                onClick={() => handleUpgradeDowngrade("Upgrade")}
                className={styles["upgradeButton"]}
              >
                Upgrade
              </Button>

              {/* Downgrade Button */}
              <Button
                variant="contained"
                onClick={() => handleUpgradeDowngrade("Downgrade")}
                className={styles["downgradeButton"]}
              >
                Downgrade
              </Button>

              {/* Confirmation Modal */}
              <Modal
                show={showConfirmationModal}
                onHide={handleCloseModal}
                style={modalStyle}
              >
                <div>
                  <Typography
                    variant="h6"
                    className={styles["confirmationModelTypography"]}
                  >
                    Confirm {actionType}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={styles["confirmationModelTypography2"]}
                  >
                    Are you sure you want to {actionType.toLowerCase()} the
                    user?
                  </Typography>
                </div>
                <div style={buttonContainerStyle}>
                  <Button
                    variant="secondary"
                    onClick={handleCloseModal}
                    className={styles["confirmationModelClose"]}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleConfirmation}
                    className={styles["confirmationModelConfirmation"]}
                  >
                    Confirm
                  </Button>
                </div>
              </Modal>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default UpgradeDowngradePermission;
