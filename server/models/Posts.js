const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  postText: {
    type: String,
    minlength: 1,
    maxlength: 280,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: date => date.toLocaleString()
  },
  username: {
    type: String,
    required: true,
  },
},
  {
    toJSON: {
      getters: true,
      virtuals: true
    }
  });

const Post = model('Post', PostSchema);

module.exports = Post;