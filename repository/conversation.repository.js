const conversationRepository = require("../models/conversation.model")

const createConversation = async (data) => {
    const result = await conversationRepository.save(data)
    return result
}

const getConversation = async (chat_id) => {
    const result = await conversationRepository.search()
        .where('chat_id').eq(chat_id)
        .return.all()
    return result
}

module.exports = {
    createConversation,
    getConversation,
}