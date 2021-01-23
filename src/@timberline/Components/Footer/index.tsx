import React from 'react'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'

import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="footer_subset">
        <PermContactCalendarIcon />
        <p className="footer_content">Contact Us</p>
      </div>
      <div className="footer_subset">
        <CallIcon />
        <p className="footer_content">(505)-470-5446</p>
      </div>
      <div className="footer_subset">
        <EmailIcon />
        <p className="footer_content">timberlineincsantafe@gmail.com</p>
      </div>
    </footer>
  )
}

export { Footer }
