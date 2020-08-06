import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <Link to="/">
        <img id="timberline_logo" src="../../resources/timberline-const.png"/>
      </Link>
      <Link to="/about">
        <button id="about_nav_button" className="nav_button">About</button>
      </Link>
      <Link to="/projects">
        <button id="projects_nav_button" className="nav_button">Projects</button>
      </Link>
      <Link to="/contact-us">
        <button id="contact_us_nav_button" className="nav_button">Contact Us</button>
      </Link>
      <Link to="history">
        <img id="25+_logo" src="../../resources/25+_timberline.png"/>
      </Link>
    </header>
  )
}

export default Nav;
