import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <div>
      <header className="header-section">
        <Navbar expand="lg" className="navbar-container">
          <Container>
            <img src={logo} alt="Logo" className="navbar-logo" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto navbar-links"> 
                <NavLink href="/" className="navbar-link">Home</NavLink>
                <NavLink href="/about" className="navbar-link">About</NavLink>
                <NavLink href="/view" className="navbar-link">View</NavLink>
                <NavLink href="/account" className="navbar-link">My Account</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
