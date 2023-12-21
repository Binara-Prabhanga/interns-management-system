import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUserPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Breadcrumbs,
  Typography,
  Link as MuiLink,
  CssBaseline,
} from "@mui/material";

const AdminDashboard = () => {
  const [userCount, setUserCount] = useState(0);

  const history = useHistory();
  const handleLogout = () => {
    history.push("/login");
  };

  useEffect(() => {
    const dummyUserCount = 50;
    setUserCount(dummyUserCount);
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      {/* Left Navigation Bar */}
      <div
        style={{
          width: "280px",
          backgroundColor: "#ffffff",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          borderRight: "1px solid #ccc",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h5"
          style={{ color: "#ffffff", marginBottom: "20px" }}
        >
          Admin Dashboard
        </Typography>

        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: "20px" }}>
          <MuiLink color="inherit" component={Link} to="/">
            Home
          </MuiLink>
        </Breadcrumbs>

        {/* Navigation Items */}
        <div style={{ marginBottom: "10px", width: "100%", textAlign: "left" }}>
          <Button
            variant="outlined"
            component={Link}
            to="/admin-create-account"
            style={{
              color: "#697078",
              width: "100%",
              border: "0",
              paddingLeft: "0",
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textTransform: "none",
            }}
          >
            <FontAwesomeIcon icon={faBuilding} style={{ marginRight: "8px" }} />
            Create Company Account
          </Button>

          <Button
            variant="outlined"
            component={Link}
            to="/admin-invite-users"
            style={{
              color: "#697078",
              width: "100%",
              border: "0",
              paddingLeft: "0",
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textTransform: "none",
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: "8px" }} />
            Invite Users
          </Button>

          <Button
            variant="outlined"
            component={Link}
            to="/admin-create-intern"
            style={{
              color: "#697078",
              width: "100%",
              border: "0",
              paddingLeft: "0",
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textTransform: "none",
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: "8px" }} />
            Create Intern Profile
          </Button>

          <Button
            variant="outlined"
            component={Link}
            to="/admin-upgrade-downgrade"
            style={{
              color: "#697078",
              width: "100%",
              border: "0",
              paddingLeft: "0",
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textTransform: "none",
            }}
          >
            <FontAwesomeIcon icon={faBuilding} style={{ marginRight: "8px" }} />
            Upgrade/Downgrade Permission
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/admin-evaluation-form"
            style={{
              color: "#697078",
              width: "100%",
              border: "0",
              paddingLeft: "0",
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textTransform: "none",
            }}
          >
            <FontAwesomeIcon icon={faBuilding} style={{ marginRight: "8px" }} />
            Create Evaluation Form
          </Button>
        </div>
      </div>
      {/* Main Content */}
      <div style={{ textAlign: "left", flex: 1, padding: "15px" }}>
        {/* Content Title */}
        <Typography
          variant="h4"
          style={{ color: "#2c3e50", marginBottom: "20px" }}
        >
          Dashboard Overview
        </Typography>

        {/* User Count */}
        <Typography
          variant="body1"
          style={{ color: "#2c3e50", marginBottom: "10px" }}
        >
          Total Users: {userCount}
        </Typography>

        {/* Dynamic Content */}
      </div>
    </div>
  );
};

export default AdminDashboard;
