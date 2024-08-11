import React from 'react';
import { Link } from 'react-router-dom';

const Projects = "/projects";
const Contact = "/contact";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <Link className="navbar-brand text-dark" to="/"><strong>Home</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" to={Projects}><strong>Projects</strong></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to={Contact}><strong>Contact</strong></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
