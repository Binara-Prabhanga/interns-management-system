import React from "react";
import { Button } from "react-bootstrap";


const AdminDashboard = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
      <h2 style={{ marginBottom: "20px" }}>Admin Dashboard</h2>

        <Button variant="danger" style={{ marginBottom: "10px" }}>
          Logout
        </Button>


      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "20%",
            marginRight: "20px",
            backgroundColor: "#e9ecef",
            padding: "15px",
          }}
        >
          {/* Sidebar */}
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li>Dashboard</li>
            <li>Interns</li>
            <li>Forms</li>
            {/* Add more sidebar items as needed */}
          </ul>
        </div>

        <div style={{ flex: 1, backgroundColor: "white", padding: "15px" }}>
          {/* Main Content */}
          <h3>Recent Interns</h3>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>University</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Example University</td>
                <td>Hired</td>
              </tr>
              {/* Add more rows with intern data */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
