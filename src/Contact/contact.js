import React, {useState} from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    mail: '',
    phnumber: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the data to the backend API endpoint using the Fetch API
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend if needed
        console.log('Response from server:', data);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

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
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="mail">Mail: </label>
        <input
          type="mail"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
        />
        <label htmlFor="phnumber">Phone No: </label>
        <input
          type="number"
          name="phnumber"
          value={formData.phnumber}
          onChange={handleChange}
        />
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
