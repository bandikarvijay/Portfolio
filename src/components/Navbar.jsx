import React from 'react';
import './Navbar.css';

function Navbar({ onHomeClick, onAboutClick, onSkillsClick, onProjectsClick, onContactClick }) {
  return (
<nav className="navbar">
  <div className="navbar-brand">B V Vijaya Bhaskar</div>
  <div className="nav-container">
    <ul className="nav-links">
      <li onClick={onHomeClick}>Home</li>
      <li onClick={onAboutClick}>About</li>
      <li onClick={onSkillsClick}>Skills</li>
      <li onClick={onProjectsClick}>Projects</li>
      <li onClick={onContactClick}>Contact</li>
    </ul>
  </div>
</nav>

  );
}

export default Navbar;
