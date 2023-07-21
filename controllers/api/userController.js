// controllers/api/userController.js
const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// GET route for retrieving user data
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST route for user login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ where: { username } });

    // If user not found or password is incorrect, send an error response
    if (!user || !user.checkPassword(password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    console.log(user.id)
req.session.user_id = user.id
    // Redirect the user to the diary page
    req.session.save(() => {
      
       res.redirect('/diary');
    })
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST route for adding a new user
router.post('/register', async (req, res) => {
  try {
    console.log('test')
    const newUser = await User.create(req.body);
    //res.status(201).json(newUser);
    req.session.user_id = newUser.id
    // Redirect the user to the diary page
    req.session.save(() => {
      
       res.redirect('/diary');
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
