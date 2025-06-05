import React from "react";
import { Link } from "react-router-dom";
import { Nav, Logo, Menu } from "../styles/components/NavbarStyles";

export default function Navbar() {
  return (
    <Nav>
      <Logo src="/src/assets/logo.jpeg" alt="Ether Automotive" />
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </Menu>
    </Nav>
  );
}