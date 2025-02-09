import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./LoginModal";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">NewsSphere</div>
        <ul className="nav-links">
          <NavLink className={(e) => (e.isActive ? "isActive" : "")} to="/">
            Home
          </NavLink>
          <NavLink className={(e) => (e.isActive ? "isActive" : "")} to="/about">
            About
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "isActive" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
          <button className="open-sidebar-btn" onClick={toggleSidebar}>
            ☰
          </button>
        </ul>
        <div className="cta-buttons">
          <button className="subscribe">Subscribe</button>
          <LoginModal></LoginModal>
        </div>
        {/* Sidebar */}
        <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
          <button className="close-sidebar-btn" onClick={toggleSidebar}>
            ×
          </button>
          <div className="logo">NewsSphere</div>
          <ul className="sidebar-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        {/* Overlay */}
        <div
          className={`overlay ${isOpen ? "overlay-show" : ""}`}
          onClick={toggleSidebar}
        ></div>
      </nav>
    </header>
  );
}

export default Header;
