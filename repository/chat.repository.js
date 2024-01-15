const { chatRepository } = require("../models")

const getChat = async (data) => {
    const result = await chatRepository.search()
        .where('member').containOneOf(...data).return.all()
    return result
}

const createChat = async (data) => {
    const result = await chatRepository.save(data)
    return result
}

module.exports = {
    getChat,
    createChat
}