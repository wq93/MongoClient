const {GoodsMolel} = require('../models')

module.exports = async (ctx) => {
 let list = await GoodsMolel.find();
  try{
    ctx.body = {
      code: 0,
      data: {
        list,
        msg:''
      }
    }
  }catch (e) {
    ctx.state = {
      code: -1,
      data: {
        errorInfo: e,
        msg: '失败'
      },
    }
  }
}


// function goods() {
//   const GoodModel = mongoose.model('good', new Schema({name: String}));
//
//   // 增加
//   // const good = new GoodModel({name: 'DateTime:' + Date.now()})
//   // good.save((err, docs)=>{
//   //   console.log(docs);
//   // })
//
//   // 查找
//   GoodModel.find((err, docs) => {
//     console.log(docs);
//   });
//
//   // 修改
//   // const name = 'DateTime:1554023121767'
//   // GoodModel.update({name}, (err, doc) => {
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     console.log(doc);
//   //   }
//   //   db.close();
//   // });
// }