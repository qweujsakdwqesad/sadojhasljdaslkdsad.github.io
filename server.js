const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from your GitHub Pages domain
const corsOptions = {
  origin: 'https://qweujsakdwqesad.github.io',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

let jonConfirmed = false;

app.get('/api/confirm', (req, res) => {
  jonConfirmed = true;
  res.send('Jon has confirmed access!');
});

app.get('/api/check', (req, res) => {
  res.send(jonConfirmed.toString());
});

app.get('/api/reset', (req, res) => {
  jonConfirmed = false;
  res.send('Jon confirmation has been reset!');
});

app.get('/api/info', (req, res) => {
  const forwardedFor = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const forwardedHost = req.headers['x-forwarded-host'] || req.headers.host;
  const forwardedPort = req.headers['x-forwarded-port'] || forwardedHost.split(':')[1] || 'default port';
  
  console.log(`Forwarded IP: ${forwardedFor}`);
  console.log(`Forwarded Host: ${forwardedHost}`);
  console.log(`Forwarded Port: ${forwardedPort}`);
  
  res.send(`Forwarded host: ${forwardedFor}:${forwardedPort}`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
