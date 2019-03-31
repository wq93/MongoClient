console.log('app running ...');
require('./db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


goods()
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
