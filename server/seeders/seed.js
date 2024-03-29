const db = require('../config/connection');
const { User, Post } = require('../models');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Post.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, username } = await Post.create(postSeeds[i]);
      console.log("the username is ", username)
      await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            posts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
