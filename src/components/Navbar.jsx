import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <img src="/logo.png" alt="Ether Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;