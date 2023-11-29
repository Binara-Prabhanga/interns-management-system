// src/components/Login.js

import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Interns Management System</h2>
      <Form style={formStyle}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={inputStyle}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={buttonStyle}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

// Styles
const formStyle = {
  maxWidth: "400px",
  margin: "auto",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  padding: "20px",
  borderRadius: "8px",
};

const inputStyle = {
  marginBottom: "15px",
};

const buttonStyle = {
  width: "100%",
};

export default Login;
