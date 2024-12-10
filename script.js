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
  const forwardedFor = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const forwardedHost = req.headers['x-forwarded-host'] || req.headers.host;
  const forwardedPort = req.headers['x-forwarded-port'] || forwardedHost.split(':')[1] || 'default port';
  
  console.log(`Forwarded IP: ${forwardedFor}`);
  console.log(`Forwarded Host: ${forwardedHost}`);
  console.log(`Forwarded Port: ${forwardedPort}`);
  
  res.send(`Forwarded host: ${forwardedFor}:${forwardedPort}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const forwardedFor = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const forwardedHost = req.headers['x-forwarded-host'] || req.headers.host;
  const forwardedPort = req.headers['x-forwarded-port'] || forwardedHost.split(':')[1] || 'default port';
  console.log(`Server is running on port ${PORT}`);

  console.log(`Forwarded Host: ${forwardedHost}`);
  console.log(`Forwarded Port: ${forwardedPort}`);
});
