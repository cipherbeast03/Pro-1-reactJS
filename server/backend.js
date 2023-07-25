// Assuming you have Node.js and Express.js installed
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

// Endpoint to handle the incoming contact form data
app.post('/api/contact', (req, res) => {
  const formData = req.body;
  // Process the formData and save it to your database
  // For demonstration purposes, we'll just log the data
  console.log('Received contact form data:', formData);
  res.json({ message: 'Data received successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
