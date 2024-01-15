const { chatRepository, userRepository } = require("../repository")
const { createResponse } = require("../utility/utility")
const { v4: uuidv4 } = require('uuid');
const moment = require('moment')

const getChat = async (req, res, next) => {
    const user = req.user
    const { member_id } = req.query
    const chat = await chatRepository.getChat([user.id, member_id])
    return createResponse(res, true, null, chat)
}

const createChat = async (req, res, next) => {
    const user = req.user
    const { member_id } = req.body
    const data = {
        id: uuidv4(),
        member: [user.id, member_id],
        avatar: null,
        created_at: moment().utc().format('YYYY-MM-DD hh:mm:ss'),
        updated_at: moment().utc().format('YYYY-MM-DD hh:mm:ss'),
    }
    const chat = await chatRepository.createChat(data)
    return createResponse(res, true, null, chat)
}

const getChatOfMe = async (req, res, next) => {
    const user = req.user
    const chat = await chatRepository.getChat([user.id])
    const chatGroup = chat.map(async el => {
        const user_id = el.member.find(item => item !== user.id)
        const userInfo = await userRepository.getUserById(user_id)
        return {
            ...el,
            name: userInfo.username
        }

    })

    const result = await Promise.all(chatGroup)
    return createResponse(res, true, null, result)
}

module.exports = {
    getChat,
    createChat,
    getChatOfMe
}