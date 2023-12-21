// EvaluatorDashboard.js
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

const EvaluatorDashboard = () => {
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
          Evaluator Dashboard
        </Typography>

        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: "20px" }}>
          <MuiLink color="inherit" component={Link} to="/">
            Home
          </MuiLink>
          <MuiLink color="inherit" component={Link} to="/evaluator-dashboard">
            Evaluator Dashboard
          </MuiLink>
        </Breadcrumbs>

        {/* Navigation Items */}
        <div
          style={{ marginBottom: "10px", width: "100%", textAlign: "left" }}
        ></div>
      </div>
      {/* Main Content */}
      <div>
        <h1>Evaluator Overview</h1>

        <div>
          <h2>Intern Profiles</h2>
          <p>View intern profiles here.</p>
          <Link to="/intern-profiles">Go to Intern Profiles</Link>
        </div>

        <div>
          <h2>Evaluation Forms</h2>
          <p>Fill and submit assigned evaluation forms.</p>
          <Link to="/evaluation-forms">Go to Evaluation Forms</Link>
        </div>
      </div>
    </div>
  );
};

export default EvaluatorDashboard;
