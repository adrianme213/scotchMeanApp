const express = require('express');
const router = express.Router();

// Declare axios for making HTTP requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

// Get API Listing
router.get('/', (req, res) => {
  res.send('API Works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Grabbing posts from mock API
  // Later replace with MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error);
    })
});

module.exports = router;
