const express = require("express")

router = express.Router()

router.get("/", (req,res,next) => {
  res.render('index', { pageTitle: 'Add User' })
})

module.exports = router;


