import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer>
      <p className="footer_content">Contact Us</p>
      <p className="footer_content">Phone: (505)-470-5446</p>
      <div className="footer_content">
        <a href="mailto: timberlineinc.steve@gmail.com" >Email: timberlineinc.steve@gmal.com</a>
      </div>
      {/* <p className="footer_content">timberlineinc.steve@gmail.com</p> */}
    </footer>
  )
}
