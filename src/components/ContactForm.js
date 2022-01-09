import React, { useState } from "react";
import './Footer.css';
import './Button.css';
// import Button from '../components/Button';

const Contact = () => {
  const [status, setStatus] = useState("Contact Me");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");

    let result = await response.json();

    alert(result.status);
  };

  return (
    <>
      <h1>get at me</h1>
      <form className='footer-subscription' onSubmit={handleSubmit}>
        <div className='input-areas'>
          <label htmlFor="name">Name:</label>
          <input htmlFor="name" className='footer-input' type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input className='footer-input' type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea className='footer-input' id="message" required />
        </div>
        <button buttonStyle='btn--primary' type="submit">{status}</button>
      </form>
    </>
  );
};

export default Contact;