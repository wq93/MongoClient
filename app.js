console.log('app running ...');
const config = require('./config')
const uri = `mongodb+srv://${config.MongoDB.username}:${config.MongoDB.password}@cluster0-w5bwk.mongodb.net`;


/*
* mongodb连接数据库法
* */
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(uri, {useNewUrlParser: true}, (err, client) => {
  if (err) {
    console.log('connect error', err)
  } else {
    console.log('connect is success!!')
    const collection = client.db("yibozi").collection("good");
    collection.find().toArray((err, docs) => {
      console.log(docs);
    });
  }
});

/*
* mongoose
* */
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema
// mongoose.connect(uri, {useNewUrlParser: true})
//   .then(db => {
//     console.log("Connected to mongodb...")
//     var MyModel = mongoose.model('Goods', new Schema());
//
//     MyModel.find(function (error, result) {
//       console.log(result);
//     });
//   })
//   .catch(err => console.log(err));
