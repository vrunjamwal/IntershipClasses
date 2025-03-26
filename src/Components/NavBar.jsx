import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="your-lpu-logo.png" alt="LPU Logo" className="logo-img" />
        <div className="logo-text">
          <h1 className="logo-title">LOVELY PROFESSIONAL UNIVERSITY</h1>
          <p className="logo-subtitle">Transforming Education Transforming India</p>
        </div>
        <img src="your-naac-logo.png" alt="NAAC A++" className="naac-logo" />
      </div>

      <div className="navbar-links">
        <ul className="links-list">
          <li><a href="#jobs">JOBS</a></li>
          <li><a href="#happenings">HAPPENINGS</a></li>
          <li><a href="#conferences">CONFERENCES</a></li>
          <li><a href="#studyabroad">STUDY ABROAD</a></li>
          <li><a href="#request">REQUEST</a></li>
          <li><a href="#international">INTERNATIONAL ADMISSIONS</a></li>
          <li><a href="#online">ONLINE EDUCATION</a></li>
          <li><a href="#distance">DISTANCE EDUCATION</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div className="lpu-tag">LPU</div>
      </div>

      <div className="navbar-main">
        <ul className="main-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#admissions">ADMISSIONS</a></li>
          <li><a href="#academics">ACADEMICS</a></li>
          <li><a href="#campuslife">CAMPUS LIFE</a></li>
          <li><a href="#placements">PLACEMENTS</a></li>
          <li><a href="#research">RESEARCH</a></li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <button className="apply-button">Apply Now</button>
      </div>
    </nav>
  );
};

export default NavBar;