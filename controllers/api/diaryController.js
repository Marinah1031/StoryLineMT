// controllers/api/diaryController.js
const express = require('express');
const router = express.Router();
const { Diary } = require('../../Models');

// GET route for retrieving all diary entries
router.get('/', async (req, res) => {
  try {
    const diaryEntries = await Diary.findAll();
    res.status(200).json(diaryEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST route for adding a new diary entry
router.post('/', async (req, res) => {
  try {
    const newDiaryEntry = await Diary.create(req.body);
    res.status(201).json(newDiaryEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE route for deleting a diary entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const diaryEntry = await Diary.findByPk(req.params.id);
    if (!diaryEntry) {
      return res.status(404).json({ message: 'Diary entry not found' });
    }
    await diaryEntry.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
