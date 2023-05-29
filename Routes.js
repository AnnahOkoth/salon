const express = require('express');
const router = express.Router();
const Salon = require('./model');

// Create a new salon
router.post('/salons', (req, res) => {
  const salon = new Salon(req.body);
  salon.save()
    .then(() => res.json({ message: 'Salon created successfully' }))
    .catch((error) => res.status(500).json({ error: 'Failed to create salon' }));
});

// Get all salons
router.get('/salons', (req, res) => {
  Salon.find()
    .then((salons) => res.json(salons))
    .catch((error) => res.status(500).json({ error: 'Failed to fetch salons' }));
});

// Get a specific salon
router.get('/salons/:id', (req, res) => {
  Salon.findById(req.params.id)
    .then((salon) => {
      if (!salon) {
        return res.status(404).json({ error: 'Salon not found' });
      }
      res.json(salon);
    })
    .catch((error) => res.status(500).json({ error: 'Failed to fetch salon' }));
});

// Update a salon
router.put('/salons/:id', (req, res) => {
  Salon.findByIdAndUpdate(req.params.id, req.body)
    .then((salon) => {
      if (!salon) {
        return res.status(404).json({ error: 'Salon not found' });
      }
      res.json({ message: 'Salon updated successfully' });
    })
    .catch((error) => res.status(500).json({ error: 'Failed to update salon' }));
});

// Delete a salon
router.delete('/salons/:id', (req, res) => {
  Salon.findByIdAndDelete(req.params.id)
    .then((salon) => {
      if (!salon) {
        return res.status(404).json({ error: 'Salon not found' });
      }
      res.json({ message: 'Salon deleted successfully' });
    })
    .catch((error) => res.status(500).json({ error: 'Failed to delete salon' }));
});

module.exports = router;
