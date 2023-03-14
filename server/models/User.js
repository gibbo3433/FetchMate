const { Schema, model } = require('mongoose');
​
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
      },
      message: props => `${props.value} is not a valid e-mail!`
    },
    required: [true, 'User e-mail required'],
    unique: true
  },
  userGender: {
    type: String,
    minlength: 1,
    maxlength: 25,
    required: true,
    trim: true,
  },
  userAge: {
    type: Number,
    unique: true,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
    trim: true,
  },
  userBio: {
    type: String,
    minlength: 1,
    maxlength: 300,
    required: true,
    trim: true,
  },
  userWalkTimes: {
    type: String,
    minlength: 1,
    maxlength: 300,
    required: true,
    trim: true,
  },
  userDogName: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true,
    trim: true,
  },
  userDogBreed: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true,
    trim: true,
  },
  userDogAge: {
    type: Number,
    unique: true,
    required: true,
    trim: true,

  },
  userDogBio: {
    type: String,
    minlength: 1,
    maxlength: 300,
    required: true,
    trim: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Posts'
    },
  ],
},
{
  toJSON: {
    virtuals: true
  }
});
​

const User = model('User', userSchema);
​
module.exports = User;
