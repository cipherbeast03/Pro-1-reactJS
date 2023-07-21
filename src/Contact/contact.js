import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="home-container">
      <h1>Contact us</h1>
      <center>
        <img
          src="https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM="
          height="250px"
          width="400px"
        />
      </center>
      <form className="form-container">
        <label htmlfor="mail">Mail: </label>
        <input type="mail" />
        <label htmlFor="phnumber">Phone No: </label>
        <input type="number" />
        <label htmlFor="message">Message: </label>
        <input type="text" />
      </form>
    </div>
  );
};

export default Contact;
