const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 3,
    required: true
  },
  lastName: {
    type: String,
    minlength: 3,
    required: true
  },
  email: {
    type: String,
    minlength: 3,
    required: true
  },
  phone: {
    type: String
  },
  company: {
    type: String
  },
  message: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Contact', schema);
