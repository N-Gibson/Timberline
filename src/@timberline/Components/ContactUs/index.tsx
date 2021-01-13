import React from 'react'

import { ContactForm, Layout } from '@timberline/Components'

import './ContactUs.scss'

interface ContactUsProps {
  props: any
}

const ContactUs: React.FC<ContactUsProps> = (props) => {
  return (
    <Layout props={props} active="contact">
      <div className="contactUs_container">
        <section className="contactUs">
          <article>
            <h3>Interested in having some work done?</h3>
            <h2>Get in touch with us for a free quote!</h2>
            <p>
              At Timberline Inc., we take pride in customer service above all
              else! Reach out to us with your basic contact information as well
              as a brief description of the work you need done. We will be in
              touch soon, thank you!
            </p>
          </article>
          <ContactForm />
        </section>
      </div>
    </Layout>
  )
}

export { ContactUs }
