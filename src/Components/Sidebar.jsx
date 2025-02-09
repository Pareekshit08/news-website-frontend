import React from "react";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <button className="open-sidebar-btn" onClick={toggleSidebar}>
          ☰ Open Sidebar
        </button>
        <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
          <button className="close-sidebar-btn" onClick={toggleSidebar}>
            ×
          </button>
          <ul className="sidebar-menu">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div
          className={`overlay ${isOpen ? 'overlay-show' : ''}`}
          onClick={toggleSidebar}
        ></div>
      </>
    );
  };
  
  export default Sidebar;