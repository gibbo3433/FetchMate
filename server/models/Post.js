const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    postText: {
      type: String,
      minlength: 1,
      maxlength: 400,
      required: true,
    },
    location: {
      type: [Number],
      default: [0, 0],
      index: "2dsphere",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleString(),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

const Post = model("post", postSchema);

module.exports = Post;
