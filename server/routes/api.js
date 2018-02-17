const express = require('express');
const router = express.Router();

// Get API Listing
router.get('/', (req, res) => {
  res.send('API Works');
});

module.exports = router;
