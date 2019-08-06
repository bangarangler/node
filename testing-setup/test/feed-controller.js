require('dotenv').config();
const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user.js');
const FeedController = require('../controllers/feed.js');
const AuthController = require('../controllers/auth.js');

describe('Feed Controller', function() {
  before(function(done) {
    mongoose
      .connect(
        `mongodb+srv://${process.env.MONGO_USER}:${
          process.env.MONGO_PW
        }@clusternodejs-jp-j5zcw.mongodb.net/${
          process.env.MONGO_TEST_DATABASE
        }`,
        {useNewUrlParser: true},
      )
      .then(result => {
        const user = new User({
          email: 'test@test.com',
          password: 'testing',
          name: 'Test',
          posts: [],
          _id: '5c0f66b979af55031b34728a',
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

  it('should add a created post to the posts of the creator', function(done) {

    const req = {
      body: {
        title: 'Test Post',
        content: 'A Test Post',
      },
      file: {
        path: 'abc'
      },
      userId: '5c0f66b979af55031b34728a'
    };

    const res = {status: function() { return this; }, json: function() {}}

    FeedController.createPost(req, res, () => {}).then((savedUser) => {
      expect(savedUser).to.have.property('posts')
      expect(savedUser.posts).to.have.length(1);
      done();
    })
  });

  after(function(done) {
    User.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      });
  });
});
