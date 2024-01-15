const { conversationRepository } = require("../repository")
const { createResponse } = require("../utility/utility")
const { v4: uuidv4 } = require('uuid');
const moment = require('moment')

const createConversation = async (req, res, next) => {
    const user = req.user
    const { content, chat_id } = req.body
    const data = {
        id: uuidv4(),
        sender_id: user.id,
        chat_id,
        content,
        created_at: moment().utc().format('YYYY-MM-DD hh:mm:ss'),
        updated_at: moment().utc().format('YYYY-MM-DD hh:mm:ss'),
    }
    const chat = await conversationRepository.createConversation(data)
    return createResponse(res, true, null, chat)
}

const getConversation = async (req, res, next) => {
    const { chat_id } = req.params

    const chat = await conversationRepository.getConversation(chat_id)
    return createResponse(res, true, null, chat)
}

module.exports = {
    createConversation,
    getConversation,
}