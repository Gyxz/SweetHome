const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const craftsmanSchema = new Schema({
craftsman_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  experience:{type: Number, required: true,},
  phone:{type: String, required: true, pattern: "^\+?3?8?(0\d{9})$",maxLength: 7},
}, {
  timestamps: true,
});

const craftsman = mongoose.model('Craftsman', craftsmanSchema);

module.exports = craftsman;