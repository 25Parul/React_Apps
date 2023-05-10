import React, { useEffect, useState } from "react";
import FormInput from "../form-input/FormInput";
import "./form.css";

const ContactForm = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log(username);
  }, [username]);

  return (
    <div>
      <h1> Do you have something to say ?</h1>
      <form id="form">
        <label>
          Name:
          <input placeholder="Name" />
        </label>
        <label>
          Email:
          <input placeholder="Email Id" />
        </label>
        <label>
          Message:
          <input placeholder="Message" />
        </label>
      </form>
    </div>
  );
};

export default ContactForm;
