const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
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
        message: (props) => `${props.value} is not a valid e-mail!`,
      },
      required: [true, "User e-mail required"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
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
    walkTimes: {
      type: String,
      minlength: 1,
      maxlength: 300,
      required: true,
      trim: true,
    },
    dogName: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true,
      trim: true,
    },
    dogBreed: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true,
      trim: true,
    },
    dogAge: {
      type: String,
      required: true,
      trim: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
  // (userSchema.methods.isCorrectPassword = async function (password) {
  //   return bcrypt.compare(password, this.password);
  // })
);

const User = model("User", userSchema);

module.exports = User;
