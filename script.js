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
  const forwardedFor = req.get('X-Forwarded-For');
  const forwardedPort = req.get('X-Forwarded-Port');
  const host = forwardedFor ? forwardedFor.split(',')[0] : req.ip;
  const port = forwardedPort || req.get('host').split(':')[1] || 'default port';
  res.send(`Forwarded host: ${host}:${port}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
