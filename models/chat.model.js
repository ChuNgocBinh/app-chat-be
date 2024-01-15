const { Schema, Repository } = require("redis-om");
const redis = require('../db')
const chatSchema = new Schema('chats', {
    id: { type: 'string' },
    member: { type: 'string[]' },
    avatar: { type: 'string' },
    created_at: { type: 'date' },
    updated_at: { type: 'date' }
  }, {
    dataStructure: 'HASH'
})

const chatRepository = new Repository(chatSchema, redis)
chatRepository.createIndex();
module.exports = chatRepository