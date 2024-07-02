// client/src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct

const NavigationBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <Navbar bg="light" expand="lg" className={darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}>
      <Navbar.Brand as={Link} to="/">School Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
        </Nav>
        <Button onClick={toggleDarkMode} variant={darkMode ? 'light' : 'dark'}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
