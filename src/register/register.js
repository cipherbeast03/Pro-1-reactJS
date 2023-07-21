import React, { useState } from 'react';
import './register.css';

function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleFirstname = (event) => {
    setFirstname(event.target.value);
  };
  const handleLastname = (event) => {
    setLastname(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(firstname, lastname, username, password);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('firstname', firstname);
    } else {
      setError('Passwords do not match!!!');
    }
  };
  return (
    <div>
      <form className="form-container">
        <h2>Register</h2>
        <label htmlFor={firstname}>First Name: </label>
        <input value={firstname} onChange={handleFirstname} />
        <label htmlFor={lastname}>Last Name: </label>
        <input value={lastname} onChange={handleLastname} />
        <label htmlFor={username}>Email: </label>
        <input value={username} onChange={handleUsername} />
        <label htmlFor={password}>Password: </label>
        <input type="password" value={password} onChange={handlePassword} />
        <label htmlFor={confirmPassword}>Confirm Password: </label>
        <input value={confirmPassword} onChange={handleConfirmPassword} />
        <button onClick={handleSubmit}>Sumbit</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default Register;
// Anush Serrao anush@gmail.com anush anush
