const express = require('express');
const app = express();

let jonConfirmed = false;

// Middleware to set CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://qweujsakdwqesad.github.io'); // Allow all pages on this domain
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed request headers
  next();
});

// API to confirm access
app.get('/api/confirm', (req, res) => {
  jonConfirmed = true;
  res.send('Jon has confirmed access!');
});

// API to check access
app.get('/api/check', (req, res) => {
  res.send(jonConfirmed.toString());
});

// API to reset access
app.get('/api/reset', (req, res) => {
  jonConfirmed = false;
  res.send('Jon confirmation has been reset!');
});

// API to provide server info
app.get('/api/info', (req, res) => {
  const forwardedFor = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const forwardedHost = req.headers['x-forwarded-host'] || req.headers.host;
  const forwardedPort = req.headers['x-forwarded-port'] || forwardedHost.split(':')[1] || 'default port';

  console.log(`Forwarded IP: ${forwardedFor}`);
  console.log(`Forwarded Host: ${forwardedHost}`);
  console.log(`Forwarded Port: ${forwardedPort}`);

  res.send(`Forwarded host: ${forwardedFor}:${forwardedPort}`);
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
