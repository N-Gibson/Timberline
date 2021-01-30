import React, { useState, createRef } from 'react'

import emailjs from 'emailjs-com'
import { v4 as uuidv4 } from 'uuid'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Button, TextField } from '@material-ui/core'

import notify from '@timberline/notifications'
import vm from '@timberline/formValidation/validationMessages'

import './ContactForm.scss'
import { useStyles } from './style'

const ContactForm = () => {
  const formDefaults = {
    name: '',
    phone: '',
    email: '',
    description: '',
    loading: false,
    descriptionError: false,
  }

  const [form, setForm] = useState(formDefaults)
  const formRef = createRef()
  const classes = useStyles()

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

    setForm(formDefaults)
  }

  const toggleDescriptionError = () => {
    !form.description
      ? setForm((prev) => ({ ...prev, descriptionError: true }))
      : setForm((prev) => ({ ...prev, descriptionError: false }))
  }

  const submitOnClick = () => {
    //@ts-ignore
    formRef.current.submit()

    toggleDescriptionError()
  }

  return (
    <ValidatorForm
      className="contact_form"
      onSubmit={sendEmail}
      debounceTime={1500}
      ref={formRef as any}
    >
      <TextValidator
        className={classes.formContent}
        name="name"
        validators={['required']}
        errorMessages={[vm.required]}
        value={form.name}
        label="Name"
        onChange={setFormChange('name')}
      />
      <TextValidator
        className={classes.formContent}
        name="phone"
        type="number"
        validators={['required']}
        errorMessages={[vm.required]}
        value={form.phone}
        label="Phone"
        onChange={setFormChange('phone')}
      />
      <TextValidator
        className={classes.formContent}
        name="email"
        validators={['required', 'isEmail']}
        errorMessages={[vm.required, vm.email]}
        value={form.email}
        label="Email"
        onChange={setFormChange('email')}
      />
      <TextField
        label="Description"
        placeholder="Please include a brief description of the work required here:"
        value={form.description}
        multiline
        variant="outlined"
        rows={5}
        required={true}
        error={form.descriptionError}
        onChange={setFormChange('description')}
      />
      <Button
        className={classes.formContent}
        type="submit"
        onClick={submitOnClick}
      >
        Submit
      </Button>
    </ValidatorForm>
  )
}

export { ContactForm }
