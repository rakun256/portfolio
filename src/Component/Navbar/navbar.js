import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-name'>
            <h1>Emre Uslu</h1>
        </div>

        <div className='navbar-links'>
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
  )
}

export default Navbar