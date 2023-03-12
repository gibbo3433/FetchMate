const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const dogSchema = new Schema({
  name: {
    type: String,
    required: 'Dog name required',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  behaviour: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const Dog = model('Dog', dogSchema);

module.exports = Dog;
