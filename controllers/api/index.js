// controllers/api/index.js
const express = require('express');
const router = express.Router();

// Import API routes
const userRoutes = require('./userController');
const diaryRoutes = require('./diaryController');

// Set up routes
router.use('/users', userRoutes);
router.use('/diary', diaryRoutes);

module.exports = router;
