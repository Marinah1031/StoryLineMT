// controllers/homepageController.js
const express = require('express');
const { Diary } = require('../models');
const router = express.Router();

// GET route for the homepage
router.get('/', (req, res) => {
  res.render('index');
});

// GET login page
router.get('/login', (req, res) => {
    res.render('login');
  });
  
  // POST login form submission
  router.post('/login', (req, res) => {
    // Handle login form submission
  });
  
  // GET register page
  router.get('/register', (req, res) => {
    res.render('register');
  });
  
  // POST register form submission
  router.post('/register', (req, res) => {
    // Handle register form submission
  });
  
  // GET diary page
  router.get('/diary', async (req, res) => {
    const stories = await Diary.findAll({
      order: [['createdAt', 'desc']]
    })
    const diaryEntries = stories.map(entry => entry.get({ plain: true }))
    res.render('diary', { diaryEntries });
  });
  
  // POST diary entry submission
  router.post('/diary', (req, res) => {
    // Handle diary entry form submission
  });

module.exports = router;
