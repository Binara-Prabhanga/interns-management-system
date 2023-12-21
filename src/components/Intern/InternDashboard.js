// InternDashboard.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Breadcrumbs,
  Typography,
  Link as MuiLink,
  Container,
  CssBaseline,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import styles from "../Intern/Intern.module.css";

const InternDashboard = () => {
  // Mock data
  const internDetails = {
    name: "John Doe",
    university: "XYZ University",
    interviewScore: 90,
    interviewFeedback: "Impressive performance in the interview.",
    evolution1Score: 85,
    evolution1Feedback: "Consistently good progress in tasks.",
    evolution2Score: 92,
    evolution2Feedback: "Exceptional work in recent projects.",
    accomplishments: "Completed special project X ahead of schedule.",
    gpa: 3.8,
    projectDetails: "Working on Project Y - Frontend Development",
    assignedTeam: "Team A",
    mentor: "Jane Mentor",
  };

  const customTheme = createTheme();

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
          <MuiLink color="inherit" component={Link} to="/intern-dashboard">
            Intern Dashboard
          </MuiLink>
        </Breadcrumbs>

        {/* Navigation Items */}
        <div className={styles["leftNavItems"]}>
          <Button
            variant="outlined"
            component={Link}
            to="/intern-dashboard"
            className={styles["leftNavButtonHighlighted"]}
          >
            <FontAwesomeIcon icon={faUser} className={styles["leftNavIcon"]} />
            Intern Dashboard
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
              Intern Profile
            </Typography>
            <Box component="div" className={styles["createAccountBox2"]}>
              <div className={styles["createAccountText"]}>
                <strong>Name:</strong> {internDetails.name}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>University:</strong> {internDetails.university}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>Interview Score:</strong> {internDetails.interviewScore}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>Interview Feedback:</strong>{" "}
                {internDetails.interviewFeedback}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>Evolution1 Score:</strong>{" "}
                {internDetails.evolution1Score}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>Evolution1 Feedback:</strong>{" "}
                {internDetails.evolution1Feedback}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>Evolution2 Score:</strong>{" "}
                {internDetails.evolution2Score}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>Evolution2 Feedback:</strong>{" "}
                {internDetails.evolution2Feedback}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>Accomplishments:</strong>{" "}
                {internDetails.accomplishments}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>GPA:</strong> {internDetails.gpa}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>Project Details:</strong> {internDetails.projectDetails}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>Assigned Team:</strong> {internDetails.assignedTeam}
              </div>
              <div className={styles["createAccountText"]}>
                <strong>Mentor:</strong> {internDetails.mentor}
              </div>
            </Box>

            <Button
              component={Link}
              to="/edit-profile"
              fullWidth
              variant="contained"
              className={styles["submitButton"]}
            >
              Edit Profile
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default InternDashboard;
