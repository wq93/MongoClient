# MongoClient踩坑记录
### 1. MongoDB连接MongoDB Atlas
```js
/*
* mongodb连接数据库法
* */
const config = require('./config')
const uri = `mongodb+srv://${config.MongoDB.username}:${config.MongoDB.password}@cluster0-w5bwk.mongodb.net`;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(uri, {useNewUrlParser: true}, (err, client) => {
  if (err) {
    console.log('connect error', err)
  } else {
    console.log('connect is success!!')
    const collection = client.db(config.MongoDB.database).collection("Goods");
    collection.find().toArray((err, docs) => {
      console.log(docs);
    });
  }
});
```
### 2. Mongoose 连接MongoDB
```js
/*
* mongoose
* */
const mongoose = require('mongoose');
const db = mongoose.connection;
const Schema = mongoose.Schema;
const database = config.MongoDB.database;

mongoose.connect(`${uri}/${database}`, {useNewUrlParser: true})
db.on("connected", () => console.log("MongoDB connected success.")) // 连接成功操作
db.on("error", () => console.log("MongoDB connected fail.")) // 连接失败操作
db.on("disconnected", () => console.log("MongoDB connected disconnected.")) // 连接断开操作
```
### Mongoose查询数据库一直返回空的问题
示例代码
```js
const GoodModel = mongoose.model('Good', new Schema({name: String}));

  // 增加
  // const good = new GoodModel({name: 'DateTime:' + Date.now()})
  // good.save((err, docs)=>{
  //   console.log(docs);
  // })

  // 查找
  GoodModel.find((err, docs) => {
    console.log(docs);
  });
```
#### 大坑
`mongoose`在创建`model`的时候，会忽略首字母大写变成小写并自动添加s(Good => goods)，意思就是我虽然写的是从集合`Good`中获取数据，但是它自动跑去`goods`里面获取，所以一直是空数组