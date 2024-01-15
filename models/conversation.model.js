const { Schema, Repository } = require("redis-om");
const redis = require('../db')
const conversationSchema = new Schema('conversations', {
    id: { type: 'string' },
    sender_id: { type: 'string' },
    chat_id: { type: 'string' },
    content: { type: 'string' },
    created_at: { type: 'date' },
    updated_at: { type: 'date' }
  }, {
    dataStructure: 'HASH'
})

const conversationRepository = new Repository(conversationSchema, redis)
conversationRepository.createIndex();
module.exports = conversationRepository