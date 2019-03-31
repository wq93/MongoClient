const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static');
const response = require('./middlewares/reponse')
const router = require('./routes')
const {config} = require('./utils')
const db = require('./utils/db');

const app = new Koa();

app.use(serve('public')) // 解析文件
  .use(response)  // 响应中间件
  .use(bodyParser())// 解析body请求体
  .use(router.routes()) // 路由分发
  .use(router.allowedMethods())
  .listen(config.PORT, () => console.log(`listening on port ${config.PORT}`))

