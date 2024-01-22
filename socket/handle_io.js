const handleIO = (io, eventEmitter) => {
    eventEmitter.on('message', (data) => {
        console.log('excute', data)
        io.in(data.chat_id).emit('message', data)
    })
}

module.exports = handleIO