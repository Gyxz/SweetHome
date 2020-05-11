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
  type_service:[{
    type_service_name:{type: String,required: true,},
    price:{type: Number,required: true,},
  } ]
}, {
  timestamps: true,
});

const service = mongoose.model('Service', serviceSchema);

module.exports = service;