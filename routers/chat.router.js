const router = require('express').Router()
const auth = require('../common/middleware/auth.middleware')
const chatController = require('../controllers/chat.controller')

router.get('/', auth, chatController.getChat)
router.post('/create', auth, chatController.createChat)
router.get('/me', auth, chatController.getChatOfMe)


module.exports = router