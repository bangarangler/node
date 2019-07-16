const User = require('../models/user.js')

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false,
  });
};

exports.getSignup = (req,res,next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  })
}

exports.postLogin = (req, res, next) => {
  User.findById('5d2b43839d95c218c1dfc935')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      // Gurantee redirect only goes after db updated
      req.session.save((err) => {
        console.log(err)
        res.redirect('/')
      });
    }).catch(err => console.log(err))
};

exports.postSignup = (req,res,next) => {};

exports.postLogout = (req,res,next) => {
  req.session.destroy(err => {
    console.log(err)
    res.redirect('/')
  });
}
