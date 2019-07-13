const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
MongoClient.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${
    process.env.MONGO_PW
  }@clusternodejs-jp-j5zcw.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true }
)
  .then(client => {
    console.log('Connected!');
    callback(client);
  })
  .catch(err => console.log(err));
}

module.exports = mongoConnect;
