import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css"; // Ensure you have the correct path

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      {" "}
      {/* Add the custom class here */}
      <Container>
        {/* Brand Name */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="font-weight-bold text-white"
          style={{ fontSize: "1.8rem" }}
        >
          Mflix
        </Navbar.Brand>

        {/* Mobile Menu Icon */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />

        {/* Navbar Links (Mobile/Tablet View) */}
        <Navbar.Collapse id="basic-navbar-nav" in={isMenuOpen}>
          <Nav className="ml-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className="text-white"
              style={{ fontSize: "1rem" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              className="text-white"
              style={{ fontSize: "1rem" }}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
