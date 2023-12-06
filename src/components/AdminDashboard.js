import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUserPlus,
  faUserShield,
  faUserGraduate,
  faFileUpload,
  faClipboardList,
  faUserCheck,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Perform any logout logic if needed
    // ...

    // Navigate to the login page
    history.push("/login");
  };

  return (
    <div
      style={{ display: "flex", backgroundColor: "#f8f9fa", height: "100vh" }}
    >
      {/* Left Navigation Bar */}
      <div
        style={{
          width: "13%",
          backgroundColor: "#343a40",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/admin/create-account"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <FontAwesomeIcon
                icon={faBuilding}
                style={{ marginRight: "8px" }}
              />
              Create Company Account
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/admin/invite-users"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <FontAwesomeIcon
                icon={faUserPlus}
                style={{ marginRight: "8px" }}
              />
              Invite Users
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/admin/permission-management"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <FontAwesomeIcon
                icon={faUserShield}
                style={{ marginRight: "8px" }}
              />
              Permission Management
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/admin/create-intern-profile"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <FontAwesomeIcon
                icon={faUserGraduate}
                style={{ marginRight: "8px" }}
              />
              Create Intern Profile
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/admin/upload-cv"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <FontAwesomeIcon
                icon={faFileUpload}
                style={{ marginRight: "8px" }}
              />
              Upload CV
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/admin/create-evaluation-form"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <FontAwesomeIcon
                icon={faClipboardList}
                style={{ marginRight: "8px" }}
              />
              Create Evaluation Form
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/admin/update-intern-status"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <FontAwesomeIcon
                icon={faUserCheck}
                style={{ marginRight: "8px" }}
              />
              Update Intern Status
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Logout Button */}
        <Button
          variant="danger"
          onClick={handleLogout}
          style={{
            marginTop: "auto",
            width: "100%",
            borderRadius: "0",
            backgroundColor: "#a3b18a",
            marginBottom: "40px",
          }}
        >
          <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "8px" }} />
          Logout
        </Button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "15px" }}>
        <h2>Blah Blah Blah</h2>

      </div>
    </div>
  );
};

export default AdminDashboard;
