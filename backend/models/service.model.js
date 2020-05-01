const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    servicename: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  craftsman_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },  
}, {
  timestamps: true,
});

const service = mongoose.model('Service', serviceSchema);

module.exports = service;