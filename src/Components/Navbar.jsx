import React from 'react';
import { Link } from 'react-router-dom';

const About = "/about";
const Projects = "/projects";
const Contact = "/contact";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark ">
      <div className="container">
        <Link className="navbar-brand text-dark" to="/"><strong>Home</strong></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" to={About}><strong>About</strong></Link>
              <Link className="nav-link text-dark" to={Projects}><strong>Projects</strong></Link>
              <Link className="nav-link text-dark" to={Contact}><strong>Contact</strong></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;