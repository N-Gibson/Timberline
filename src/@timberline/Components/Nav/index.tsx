import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'
import timberline_logo from '@timberline/assets/timberline-const.png'
import timberline_logo_only from '@timberline/assets/timberline_logo_only.png'
import logo_25 from '@timberline/assets/25+_timberline.png'

interface NavProps {
  active: string
}

const Nav: React.FC<NavProps> = ({ active }) => {
  const idleButton = 'nav_button'
  const activeButton = 'nav_button active_button'

  return (
    <header>
      <Link to="/">
        <img
          id="timberline_logo"
          src={timberline_logo_only}
          alt="timberline logo"
        />
      </Link>
      <section id="nav_buttons_container">
        <Link to="/about">
          <button
            className={active === 'about' ? activeButton : idleButton}
            id="about_nav_button"
          >
            About
          </button>
        </Link>
        <Link to="/projects">
          <button
            className={active === 'projects' ? activeButton : idleButton}
            id="projects_nav_button"
          >
            Projects
          </button>
        </Link>
        <Link to="/contact-us">
          <button
            className={active === 'contact' ? activeButton : idleButton}
            id="contact_us_nav_button"
          >
            Contact Us
          </button>
        </Link>
      </section>
      <Link to="/about">
        <img id="logo_25" src={logo_25} alt="logo" />
      </Link>
    </header>
  )
}

export { Nav }
