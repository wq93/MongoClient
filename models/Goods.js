// require 默认去node_modules
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const produtSchema = new Schema({
  'uuid': {type: String}, // id
  'displayName': String, // 名称
  'type': String, // 类别 1:日用品 2:洗簌 3:出行
  'count': Number, // 数量
  'price': Number, // 价格
  'source': String, // 来源
  'remark': String // 备注
})
function goods() {
  const GoodModel = mongoose.model('good', new Schema({name: String}));

  // 增加
  // const good = new GoodModel({name: 'DateTime:' + Date.now()})
  // good.save((err, docs)=>{
  //   console.log(docs);
  // })

  // 查找
  GoodModel.find((err, docs) => {
    console.log(docs);
  });

  // 修改
  // const name = 'DateTime:1554023121767'
  // GoodModel.update({name}, (err, doc) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(doc);
  //   }
  //   db.close();
  // });
}

// Good 会自动加s去找数据库的集合
module.exports = mongoose.model('Good', produtSchema)