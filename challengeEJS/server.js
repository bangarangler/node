const path = require("path")

const express = require("express")
const bodyParser = require("body-parser")

const homeRoute = require('./routes/homeRoute.js')
const userData = require('./routes/usersRoute.js')

server = express()

server.set("view engine", 'ejs')
server.set('views', 'views')

server.use(bodyParser.urlencoded({extended: false}))

server.use(express.static(path.join(__dirname, "public")))

server.use(homeRoute)
server.use(userData.routes)

//server.use((req,res, next) => {
  //res.status(404).render('404', {pageTitle: 'Page not found'})
//})

server.listen(3000)
