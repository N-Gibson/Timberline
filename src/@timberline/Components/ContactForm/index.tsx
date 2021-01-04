import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { v4 as uuidv4 } from 'uuid'
import { Snackbar } from '@material-ui/core'

import notify from '@timberline/notifications'
import './ContactForm.scss'

const ContactForm = () => {
  const formDefaults = {
    name: '',
    phone: '',
    email: '',
    description: '',
    loading: false,
  }

  const [form, setForm] = useState(formDefaults)

  const setFormChange = (key: any) => ({ target: { value } }: any) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const sendEmail = (e: any) => {
    e.preventDefault()

    const templateParams = { ...form, id: uuidv4() }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID!,
      )
      .then(() => {
        notify.success('Work inquiry successfully sent!')
      })
      .catch(() => {
        notify.error('There was an error sending your work inquiry.')
      })
  }

  return (
    <form className="contact_form" onSubmit={sendEmail}>
      <h2>Contact Us</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={setFormChange('name')}
        value={form.name as string}
      />
      <input
        type="number"
        placeholder="Phone Number"
        value={form.phone as string}
        onChange={setFormChange('phone')}
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email as string}
        onChange={setFormChange('email')}
      />
      <label htmlFor="description">Short Description</label>
      <textarea
        name="description"
        value={form.description as string}
        onChange={setFormChange('description')}
      />
      <button type="submit" onClick={() => setForm(formDefaults)}>
        Submit
      </button>
    </form>
  )
}

export { ContactForm }
