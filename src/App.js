import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Register from './register/register';
import Login from './login/login';
import Home from './home/home';
import About from './About/about';
import PrivateRoutes from './Functions/PrivateRoutes';
import Contact from './Contact/contact';
import './style.css';

// Login submit handle
export default function App() {
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">Astro</div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <a>About</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <a>Contact</a>
            </NavLink>
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <NavLink to="/login">
              <a>Login</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/register">
              <a>Register</a>
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* {signupMessage && <p>{signupMessage}</p>} */}
    </div>
  );
}
