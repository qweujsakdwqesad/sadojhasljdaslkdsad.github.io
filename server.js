const express = require('express');
const app = express();

// Middleware to set CORS headers for all origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  next();
});

let jonConfirmed = false;

app.get('/api/confirm', (req, res) => {
  jonConfirmed = true;
  res.json({ message: 'Jon has confirmed access!', jonConfirmed: true });
});

app.get('/api/check', (req, res) => {
  res.json({ jonConfirmed });
});

app.get('/api/reset', (req, res) => {
  jonConfirmed = false;
  res.json({ message: 'Jon confirmation has been reset!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
