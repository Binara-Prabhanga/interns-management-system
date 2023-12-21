import React, { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const [userMood, setUserMood] = useState("Admin");
  const history = useHistory();

  const footerStyle = {
    backgroundColor: "#331C7A",
    color: "#ffffff",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "8%",
    padding: "20px",
  };

  const copyrightStyle = {
    margin: "0",
    fontSize: "14px",
  };

  const dropdownStyle = {
    margin: "10px",
    color: "#ffffff",
    textAlign: "left",
  };

  const handleUserMoodChange = (event) => {
    const selectedRole = event.target.value;

    switch (selectedRole) {
      case "Admin":
        history.push("/admin-dashboard");
        break;
      case "Evaluator":
        history.push("/evaluator-dashboard");
        break;
      case "Intern":
        history.push("/intern-dashboard");
        break;

      default:
        break;
    }

    setUserMood(selectedRole);
  };

  return (
    <footer
      style={{
        ...footerStyle,
        display: "flex",
        alignItems: "center",
      }}
    >
      <p style={{ ...copyrightStyle, flex: 1, marginLeft: 160}}>
        &copy; 2023 Binara Prabhanga. All rights reserved.
      </p>
      <FormControl style={{ ...dropdownStyle, minWidth: "150px", flex: 0 }}>
        <InputLabel
          id="userMood-label"
          style={{ color: "#ffffff", marginBottom: "1px", fontSize: "small" }}
        >
          Choose User View Mood:
        </InputLabel>
        <Select
          labelId="userMood-label"
          id="userMood"
          value={userMood}
          onChange={handleUserMoodChange}
          style={{ height: "30px", color: "#ffffff", fontSize: "small" }}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Evaluator">Evaluator</MenuItem>
          <MenuItem value="Intern">Intern</MenuItem>
          <MenuItem value="Manager">Manager</MenuItem>
        </Select>
      </FormControl>
    </footer>
  );
};

export default Footer;
