console.log('app running ...');


const MongoClient = require('mongodb').MongoClient;
const config = require('./config')
const uri = `mongodb+srv://${config.MongoDB.username}:${config.MongoDB.password}@cluster0-w5bwk.mongodb.net/test?retryWrites=true`;

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

// let client;
//
// if (client && client.isConnected()) {
//   console.log('DB CLIENT ALREADY CONNECTED')
// } else  {
//   client =  MongoClient.connect(uri, { useNewUrlParser: true })
//   console.log('DB CLIENT RECONNECTED')
// }

// const mongoose = require('mongoose');
// const config = require('./config')
// // const {Goods: GetGoods} = require('./models/Goods')
// mongoose
//   .connect(
//     `mongodb+srv://${config.MongoDB.username}:${config.MongoDB.password}@cluster0-w5bwk.mongodb.net/test?retryWrites=true`,
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//
//     console.log("Connected to mongodb...")
//     var Schema = mongoose.Schema
//
//     var produtSchema = new Schema({
//       'uuid': {type: String}, // id
//       'displayName': String, // 名称
//       'type': String, // 类别 1:日用品 2:洗簌 3:出行
//       'count': Number, // 数量
//       'price': Number, // 价格
//       'source': String, // 来源
//       'remark': String // 备注
//     })
//     const Goods = mongoose.model('good', produtSchema);
//
//
//     Goods.find(function (err,doc) {
//      if(err) {
//        console.log(err);
//      }else{
//        console.log('sucess:',doc);
//      }
//     })
//   })
//   .catch(err => console.log(err));
