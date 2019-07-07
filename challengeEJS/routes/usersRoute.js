const express = require("express")

router = express.Router()

const users = []

router.get('/users', (req,res,next) => {
  res.render('users', { pageTitle: 'User', users: users })
})

router.post('/add-user', (req,res,next) => {
  users.push({ name: req.body.username })
  res.redirect('/users')
})

exports.routes = router;
exports.users = users;
