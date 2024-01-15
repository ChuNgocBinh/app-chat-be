const router = require('express').Router()
const auth = require('../common/middleware/auth.middleware')
const userController = require('../controllers/user.controller')

router.get('/', userController.getUser)
router.get('/me', auth, userController.getMe)

module.exports = router