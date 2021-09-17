import React, { useState } from 'react';
import '../../styles/Form.css';

import { validateEmail } from '../../utils/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
      }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter valid email');
      return;
    }
    alert('Email sent. Have a great day!');
    
    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form-container">
        <form className="form">
        <h2>Contact Me</h2>
            <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="your email"
            />
            <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="your name"
            />
            <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="textarea"
            placeholder="message"
            />
            <button type="button" onClick={handleFormSubmit}>Send</button>
        </form>
        {errorMessage && (
            <div>
            <p className="error-text">{errorMessage}</p>
            </div>
        )}
    </div>
  );
}

export default Form;
