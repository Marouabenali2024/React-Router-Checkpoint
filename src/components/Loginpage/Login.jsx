import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";  // Import the CSS file


const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check 
        type="checkbox" 
        label="Check me out" 
        style={{ color: 'white' }} 
        className="checkbox-white" />
      </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: "#1e3a3c", color: "white" }}
        >
          Submit
        </Button>
      </Form>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Login;
