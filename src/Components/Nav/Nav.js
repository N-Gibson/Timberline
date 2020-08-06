import React from 'react';
import { Link } from 'react-router-dom';
import timberline_logo from '../../assets/timberline-const.png';
import logo_25 from '../../assets/25+_timberline.png';

const Nav = () => {
  return (
    <header>
      <Link to="/">
        <img id="timberline_logo" src={timberline_logo}/>
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
        <img id="logo_25" src={logo_25}/>
      </Link>
    </header>
  )
}

export default Nav;
