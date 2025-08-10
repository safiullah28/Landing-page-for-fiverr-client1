import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"; // You'll need to create this CSS file

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header>
      <aside className={sidebarOpen ? "active" : ""}>
        <div className="aside-top">
          <h1>
            Placy <span>Market</span>
          </h1>
          <div className="close" onClick={toggleSidebar}>
            <FaTimes />
          </div>
        </div>
        <ul>
          <li>
            <a href="#">Find a space</a>
          </li>
          <li>
            <a href="#">List your space</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="nav-buttons-div">
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </aside>

      <nav>
        <h1>
          Placy <span>Market</span>
        </h1>
        <ul>
          <li>
            <a href="#">Find a space</a>
          </li>
          <li>
            <a href="#">List your space</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="nav-buttons-div">
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
