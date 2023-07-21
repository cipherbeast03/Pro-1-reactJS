import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { LoginStatus } from '../Functions';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (e) => {
    console.log('working');
  };

  return (
    <div>
      <form className="loginform-container" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>username: </label>
        <input value={username} onChange={handleUsernameChange} />
        <label>password: </label>
        <input type="password" />
        <button type="submit">Login</button>
        {message && <p className="info-message">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
