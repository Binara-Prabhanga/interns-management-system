// src/components/Admin/CreateInternProfile.js
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { createTheme } from "@mui/material/styles";
import styles from "./Admin.module.css";

const CreateInternProfile = () => {
  const history = useHistory();
  const [internDetails, setInternDetails] = useState({
    name: "",
    university: "",
    gpa: "",
    team: "",
    status: "pending",
    interviewScore: "",
    interviewFeedback: "",
    accomplishments: "",
    mentorName: "",
    cv: null,
  });

  const [status, setStatus] = useState("Pending");

  const handleCreateInternProfile = async () => {
    try {
      const formData = new FormData();
      for (const key in internDetails) {
        formData.append(key, internDetails[key]);
      }

      const response = await fetch("http://localhost:3001/interns/register", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Intern profile created successfully:", result);
      } else {
        console.error("Failed to create intern profile");
        // error scenarios
      }
    } catch (error) {
      console.error("Error creating intern profile:", error);
      // error scenarios
    }
  };

  const handleCVUpload = (e) => {
    // file upload
    const file = e.target.files[0];
    setInternDetails({ ...internDetails, cv: file });
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
            className={styles["leftNavButtonHighlighted"]}
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
              Create Intern Profile
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateInternProfile();
              }}
              encType="multipart/form-data"
              noValidate
              className={styles["createAccountBox2"]}
            >
              {/* Name */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={internDetails.name}
                onChange={(e) =>
                  setInternDetails({ ...internDetails, name: e.target.value })
                }
                className={styles["createAccountText"]}
              />

              {/* University */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="university"
                label="University"
                name="university"
                autoComplete="university"
                value={internDetails.university}
                onChange={(e) =>
                  setInternDetails({
                    ...internDetails,
                    university: e.target.value,
                  })
                }
                className={styles["createAccountText"]}
              />

              {/* GPA */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="gpa"
                label="GPA"
                name="gpa"
                autoComplete="gpa"
                value={internDetails.gpa}
                onChange={(e) =>
                  setInternDetails({
                    ...internDetails,
                    gpa: e.target.value,
                  })
                }
                className={styles["createAccountText"]}
              />

              {/* Team */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="team"
                label="Team"
                name="team"
                autoComplete="team"
                value={internDetails.team}
                onChange={(e) =>
                  setInternDetails({
                    ...internDetails,
                    team: e.target.value,
                  })
                }
                className={styles["createAccountText"]}
              />

              {/* Status */}
              <FormControl fullWidth className={styles["createAccountText"]}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  labelId="status-label"
                  id="status"
                  value={status}
                  label="Status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Scheduled">Scheduled</MenuItem>
                  <MenuItem value="Hired">Hired</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                  <MenuItem value="Started">Started</MenuItem>
                  <MenuItem value="Ended">Ended</MenuItem>
                </Select>
              </FormControl>

              {/* Interview Score */}
              <TextField
                margin="normal"
                fullWidth
                id="interviewScore"
                label="Interview Score"
                name="interviewScore"
                autoComplete="interviewScore"
                value={internDetails.interviewScore}
                onChange={(e) =>
                  setInternDetails({
                    ...internDetails,
                    interviewScore: e.target.value,
                  })
                }
                className={styles["createAccountText"]}
              />

              {/* Interview Feedback */}
              <TextField
                margin="normal"
                fullWidth
                id="interviewFeedback"
                label="Interview Feedback"
                name="interviewFeedback"
                autoComplete="interviewFeedback"
                value={internDetails.interviewFeedback}
                onChange={(e) =>
                  setInternDetails({
                    ...internDetails,
                    interviewFeedback: e.target.value,
                  })
                }
                className={styles["createAccountText"]}
              />

              {/* Accomplishments */}
              <TextField
                margin="normal"
                fullWidth
                id="accomplishments"
                label="Accomplishments"
                name="accomplishments"
                autoComplete="accomplishments"
                value={internDetails.accomplishments}
                onChange={(e) =>
                  setInternDetails({
                    ...internDetails,
                    accomplishments: e.target.value,
                  })
                }
                className={styles["createAccountText"]}
              />

              {/* Mentor Name */}
              <TextField
                margin="normal"
                fullWidth
                id="mentorName"
                label="Mentor Name"
                name="mentorName"
                autoComplete="mentorName"
                value={internDetails.mentorName}
                onChange={(e) =>
                  setInternDetails({
                    ...internDetails,
                    mentorName: e.target.value,
                  })
                }
                className={styles["createAccountText"]}
              />

              {/* CV Upload */}
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                id="cv"
                name="cv"
                onChange={handleCVUpload}
              />

              {/* Create Intern Profile Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={styles["submitButton"]}
              >
                Create Intern Profile
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default CreateInternProfile;
