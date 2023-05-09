import React, { useEffect, useState } from 'react'
import FormInput from '../form-input/FormInput'

const ContactForm = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        console.log(username)
    }, [username])

  return (
    <div>
        <p> Do you have something to say ?</p>
      <form id="form">
        <label>
          Name:
          <input placeholder='Name' />
        </label>
        <label>
          Email:
          <input placeholder='Email Id' />
        </label>
        <label>
          Message:
          <input placeholder='Message' />
        </label>
        <FormInput text={'Name'} value={username} onChange={setUsername}/>
      </form>
    </div>
  )
}

export default ContactForm
