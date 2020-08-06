import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <Link to="/">
        <img id="timberline_logo" src="../../../assets/timberline-const.png"/>
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
        <img id="logo_25" src="../../../assets/25+_timberline.png"/>
      </Link>
    </header>
  )
}

export default Nav;
