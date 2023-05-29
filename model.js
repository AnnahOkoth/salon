const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const Salon = mongoose.model('Salon', salonSchema);

module.exports = Salon;
