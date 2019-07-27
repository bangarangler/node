require('dotenv').config()
const express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed.js');

const app = express();

//app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
//app.use(cors());

app.use((req, res, next) => {
  res.setHeader(`Access-Control-Allow-Origin`, `*`);
  res.setHeader(
    `Access-Control-Allow-Methods`,
    `OPTIONS, GET, POST, PUT, PATCH, DELETE`,
  );
  res.setHeader(`Access-Control-Allow-Headers`, `Content-Type, Authorization`);
  next();
});

app.use('/feed', feedRoutes);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@restnode-vrbbu.mongodb.net/messages`, { useNewUrlParser: true }).then(result => {
  app.listen(8080);
}).catch(err => console.log(err))
