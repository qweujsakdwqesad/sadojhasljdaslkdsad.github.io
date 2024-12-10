const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

let jonConfirmed = false;

app.get('/confirm', (req, res) => {
  jonConfirmed = true;
  res.send('Jon has confirmed access!');
});

app.get('/check', (req, res) => {
  res.send(jonConfirmed.toString());
});

app.get('/reset', (req, res) => {
  jonConfirmed = false;
  res.send('Jon confirmation has been reset!');
});

// Get forwarded host (IP address and port)
app.get('/info', (req, res) => {
  const host = req.get('host');
  res.send(`Forwarded host: ${host}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
