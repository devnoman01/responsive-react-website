import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="#home">
            <img src={logo} alt="" height="30" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="#features">
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="#pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
