import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-warning">
          FPT Aptech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#booking">Booking</Nav.Link>
            <Nav.Link href="#locations">Locations</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button variant="outline-warning">Sign In</Button>
            <Button variant="warning" className="text-white">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
