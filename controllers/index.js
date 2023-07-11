// controllers/index.js
const express = require('express');
const router = express.Router();

// Import controllers
const homepageController = require('./homepageController');
const apiRoutes = require('./api');

// Set up routes
router.use('/', homepageController);
router.use('/api', apiRoutes);

module.exports = router;
