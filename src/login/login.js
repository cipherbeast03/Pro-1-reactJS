import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { LoginStatus } from '../Functions';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('working');
  };

  return (
    <div>
      <form className="loginform-container" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">username: </label>
        <input value={username} type="text" onChange={handleUsernameChange} />
        <label htmlFor="password">password: </label>
        <input
          value={password}
          type="password"
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
        {message && <p className="info-message">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
