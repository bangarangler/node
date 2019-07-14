//const mongodb = require('mongodb');
//const MongoClient = mongodb.MongoClient;

//let _db;

//const mongoConnect = (callback) => {
//MongoClient.connect(
  //`mongodb+srv://${process.env.MONGO_USER}:${
    //process.env.MONGO_PW
  //}@clusternodejs-jp-j5zcw.mongodb.net/shop?retryWrites=true&w=majority`, { useNewUrlParser: true }
//)
  //.then(client => {
    //console.log('Connected!');
    //_db = client.db()
    //callback();
  //})
    //.catch(err => {
      //console.log(err)
      //throw err;
    //});
//}

//const getDb = () => {
  //if (_db) {
    //return _db;
  //}
  //throw 'No Database found!';
//}

//exports.mongoConnect = mongoConnect;
//exports.getDb = getDb;
