const {validationResult} = require('express-validator');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '12',
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/deathAndTech.jpg',
        creator: {
          name: 'Jon',
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({
        message: 'Validation failed, entered data is incorrect.',
        errors: errors.array(),
      });
  }
  const title = req.body.title;
  const content = req.body.content;
  //console.log(`title: ${title}, content: ${content}`);
  // Create post in db
  res.status(201).json({
    message: 'Post Created Successfully!',
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: {name: 'Jon'},
      createdAt: new Date(),
    },
  });
};
