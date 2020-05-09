const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const type_serviceSchema = new Schema({
    type_service_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
    price:{type: Number,required: true,},
    id_service:{type: String,required: true,},
  
}, {
  timestamps: true,
});

const type_service = mongoose.model('Type_service', type_serviceSchema);

module.exports = type_service;