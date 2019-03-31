const router = require('koa-router')({prefix: '/yibozi'})
const controllers = require('../controllers')

router.get('/test', controllers.test)

router.get('/getGoods', controllers.getGoods) // 查询

router.post('/updateGood', controllers.updateGood) // 编辑

router.post('/addGood', controllers.addGood) // 编辑

router.delete('/removeGood', controllers.removeGood) // 编辑



module.exports = router