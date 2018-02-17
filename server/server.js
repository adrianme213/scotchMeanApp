// Grab dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Grab API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Set our API routes
app.use('/api', api);

// Catch all for other routes to point toward index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get port from environment variable and store in express
const port = process.env.PORT || 3000;
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => {
  console.log(`API running on localhost:${port}`);
})
