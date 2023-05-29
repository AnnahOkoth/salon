const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  services: [
    {
      name: String,
      description: String,
      price: Number,
    },
  ],
  openingHours: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
  },
});

const Salon = mongoose.model('Salon', salonSchema);

module.exports = Salon;
