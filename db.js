const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://huaweiuser:Digital2018@cluster0.nmprp6j.mongodb.net/Salon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));
    