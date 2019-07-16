const User = require('../models/user.js')

exports.getLogin = (req, res, next) => {
  //const isLoggedIn = req
    //.get('Cookie')
    //.split(';')[0]
    //.trim()
    //.split('=')[1] === 'true';
  console.log(req.session.isLoggedIn)
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: req.isLoggedIn,
  });
};

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

exports.postLogout = (req,res,next) => {
  req.session.destroy(err => {
    console.log(err)
    res.redirect('/')
  });
}
