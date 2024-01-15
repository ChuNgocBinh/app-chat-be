const authRouter = require('./auth.router.js')
const userRouter = require('./user.router.js')
const chatRouter = require('./chat.router.js')
const conversationRouter = require('./conversation.router.js')

const router = (app) => {
    app.use('/auth', authRouter)
    app.use('/user', userRouter)
    app.use('/chat', chatRouter)
    app.use('/conversation', conversationRouter)
}

module.exports = router