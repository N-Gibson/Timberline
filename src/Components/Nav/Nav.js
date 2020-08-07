import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
// import timberline_logo from '../../assets/timberline-const.png';
import timberline_thumbnail from '../../assets/timberline-const-thumbnail.png';
import logo_25 from '../../assets/25+_timberline_test.png';

export const Nav = ({ active }) => {
  const idleButton = 'nav_button';
  const activeButton = 'nav_button active_button';

  return (
    <header>
      <Link to="/">
        <img id="timberline_logo" src={timberline_thumbnail} alt="timberline logo"/>
      </Link>
      <section id="nav_buttons_container">
        <Link to="/about">
          <button
            className={active === "about" ? activeButton: idleButton}
            id="about_nav_button"
          >
            About
          </button>
        </Link>
        <Link to="/projects">
          <button
            className={active === "projects" ? activeButton: idleButton}
            id="projects_nav_button"
          >
            Projects
          </button>
        </Link>
        <Link to="/contact-us">
          <button
            className={active === "contact" ? activeButton: idleButton}
            id="contact_us_nav_button"
          >
            Contact Us
          </button>
        </Link>
      </section>
      <Link to="history">
        <img id="logo_25" src={logo_25} alt="logo"/>
      </Link>
    </header>
  )
}