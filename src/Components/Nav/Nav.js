import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <header>
      <img src="../../resources/timberline-const.png"/>
      <Link to="/about">
        <button className="">About</button>
      </Link>
      <Link to="/projects">
        <button className="">Projects</button>
      </Link>
      <Link to="/contact-us">
        <button className="">Contact Us</button>
      </Link>
      <img src="../../resources/25+_timberline.png"/>
    </header>
  )
}
