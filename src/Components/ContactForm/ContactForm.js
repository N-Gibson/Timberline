import React, { useState } from "react";
import "./ContactForm.scss";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
    loading: false
  })

  const setFormChange = (key) => ({ target: { value } }) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <form className="contact_form" onSubmit={setFormChange}>
      <h2>Contact Us</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={setFormChange('name')}
        value={form.name}
      />
      <input
        type="number"
        placeholder="Phone Number"
        value={form.phone}
        onChange={setFormChange('phone')}
      />
      <input
        type="text"
        placeholder="Email"
        value={form.email}
        onChange={setFormChange('email')}
      />
      <label htmlFor="description">Short Description</label>
      <textarea
        name="description"
        type="text"
        value={form.description}
        onChange={setFormChange('description')}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
