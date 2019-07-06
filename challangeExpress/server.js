const express = require("express")

const server = express()

//server.use('/', (req,res,next) => {
  //console.log('First Middleware')
  //next()
//})

//server.use('/', (req,res,next) => {
  //console.log('Second Middleware')
  //res.send('<h1>Challenge Accepted</h1>')
//})
//

server.use('/users', (req,res,next) => {
  res.send("<h1>This is Users route</h1>")
})

server.use('/', (req,res,next) => {
  res.send("<h1>This is Home route</h1>")
})

server.listen(3000)
