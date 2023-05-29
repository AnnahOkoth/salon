const express = require('express');
const router = express.Router();
const Salon = require('../Models/Salon');

// Route to fetch all salons
router.get('/salons', async (req, res) => {
  try {
    const salons = await Salon.find();
    res.json(salons);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to create a new salon
router.post('/salons', async (req, res) => {
  try {
    const salon = new Salon(req.body);
    await salon.save();
    res.status(201).json(salon);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add more routes as needed

module.exports = router;
