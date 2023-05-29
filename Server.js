const express = require('express');
const mongoose = require('mongoose');
const salonRoutes = require('./Routes/salonRoutes');

// Create Express application
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://huaweiuser:Digital2018@cluster0.nmprp6j.mongodb.net/Salon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/api', salonRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
