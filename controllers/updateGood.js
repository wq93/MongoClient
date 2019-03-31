const {GoodsMolel} = require('../models')

module.exports = async (ctx) => {
  const {uuid = 'DateTime:' + Date.now(), displayName} = ctx.request.body
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