const router = require('koa-router')({prefix: '/yibozi'})
const controllers = require('../controllers')

router.get('/test', controllers.test)

module.exports = router