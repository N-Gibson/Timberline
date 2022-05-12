import React from 'react'

import { ContactForm } from '@timberline/Components'

import './ContactUs.scss'

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <div className="contactUs_container">
      <div className="contactUs_header_container">
        <h2>Interested in having some work done?</h2>
        <h3>Get in touch with us to schedule a quote!</h3>
      </div>
      <section className="contactUs">
        <article>
          <h2>Contact Us</h2>
          <p>
            At Timberline Inc., we take pride in customer service above all
            else! Reach out to us with your basic contact information as well as
            a brief description of the work you need done. We will be in touch
            soon, thank you!
          </p>
        </article>
        <ContactForm />
      </section>
    </div>
  )
}

export { ContactUs }
