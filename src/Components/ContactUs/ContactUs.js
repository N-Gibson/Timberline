import React from 'react';
import './ContactUs.scss';
import Layout from '../Layout/Layout';
import ContactForm from '../ContactForm/ContactForm';

export const ContactUs = () => {
  return (
    <Layout active="contact">
    <section className="contactUs">
      <article>
        <h3>Interested in remodeling your home?</h3>
        <h2>Get in touch with us for a free quote!</h2>
        <p>
          Eiusmod quis adipisicing irure laborum sint excepteur aute
          laboris aute elit incididunt cupidatat nulla proident. Cillum
          officia cillum do excepteur non laboris cupidatat enim tempor
          est fugiat cupidatat anim. Cupidatat labore nulla pariatur qui.
          Dolor adipisicing est consequat et non officia proident minim
          duis sunt qui voluptate.
        </p>
      </article>
      <ContactForm />
    </section>
    </Layout>
  )
}

export default ContactUs;
