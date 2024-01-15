const router = require('express').Router()
const auth = require('../common/middleware/auth.middleware')
const conversationController = require('../controllers/conversation.controller')

router.get('/:chat_id', auth, conversationController.getConversation)
router.post('/create', auth, conversationController.createConversation)


module.exports = router