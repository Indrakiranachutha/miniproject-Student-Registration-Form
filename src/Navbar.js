// src/layout/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../ThemeContext';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-primary'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Student Registration Form
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div>
            <button className="btn btn-outline-light mx-2" onClick={toggleTheme}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <Link className="btn btn-outline-light" to="/adduser">
              Add Student
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}