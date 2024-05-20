import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./mobileNavbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false); // URL değiştiğinde navbar'ı kapat
  }, [location]);

  return (
    <div className="mobile-navbar-container">
      <div className="navbar-name">
        <h1>Emre Uslu</h1>
      </div>
      <div className="mobile-navbar-toggle" onClick={toggleNavbar}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className={`mobile-navbar-links ${isOpen ? "open" : ""}`}>
        <Link to={`/`}>
          <span className="navbar-links-text">Main Page</span>
        </Link>
        <Link to={`/about`}>
          <span className="navbar-links-text">About Me</span>
        </Link>
        <Link to={`/projects`}>
          <span className="navbar-links-text">Projects</span>
        </Link>
        <Link to={`/skills`}>
          <span className="navbar-links-text">Skills</span>
        </Link>
        <Link to={`/contact`}>
          <span className="navbar-links-text">Contact Me</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
