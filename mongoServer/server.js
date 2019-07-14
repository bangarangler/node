require('dotenv').config();
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error.js');
//const mongoConnect = require('./util/database.js').mongoConnect;
const User = require('./models/user.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5d2b4242addfab182f27bc5c')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PW
    }@clusternodejs-jp-j5zcw.mongodb.net/shop?retryWrites=true&w=majority`, { useNewUrlParser: true }
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          username: 'Jon',
          email: 'jon@test.com',
          cart: {
            items: []
          }
        })
        user.save()
      }
    })
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
