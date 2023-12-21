// Header.js
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Header = () => {
  const history = useHistory();
  const headerStyle = {
    backgroundColor: "#331C7A",
    padding: "20px",
    color: "#ffffff",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",   
    margin: "0 auto",
  };

  const navStyle = {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
  };

  const linkStyle = {
    margin: "0 10px",
    color: "#ffffff",
    textDecoration: "none",
  };

  const h1Style = {
    margin: "0",
    flex: "1",
    textAlign: "center",
    marginLeft: "15%", 
    marginRight: "auto", 
  };

  const buttonStyle = {
    borderRadius: "5px",
    borderColor: "#bdc3c7",
    backgroundColor: "#ecf0f1",
    color: "#34495e",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  };

  const handleLogout = () => {
    history.push("/login");
  };

  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>Interns Management System - 99x</h1>
      <nav>
        <ul style={navStyle}>
          <li style={linkStyle}>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li style={linkStyle}>
            <Link to="/registration" style={linkStyle}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
      {/* Logout Button */}
      <Button
        type="submit"
        variant="outlined"
        onClick={handleLogout}
        style={{
          border: "0",
          paddingLeft: "0",
          textAlign: "left",
          display: "flex",
          color: "#ffffff",
          justifyContent: "flex-start",
          alignItems: "center",
          textTransform: "none",
          backgroundColor: "transparent",
          fontSize: "inherit",
        }}
      >
        {/* <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "8px" }} /> */}
        Logout
      </Button>
    </header>
  );
};

export default Header;
