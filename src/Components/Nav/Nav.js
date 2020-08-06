import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <header>
      <img src="../../resources/timberline-const.png"/>
      <Link to="/about">
        <button id="about_nav_button" className="nav_button">About</button>
      </Link>
      <Link to="/projects">
        <button id="projects_nav_button" className="nav_button">Projects</button>
      </Link>
      <Link to="/contact-us">
        <button id="contact_us_nav_button" className="nav_button">Contact Us</button>
      </Link>
      <img src="../../resources/25+_timberline.png"/>
    </header>
  )
}
