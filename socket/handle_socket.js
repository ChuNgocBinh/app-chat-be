const handleSocket = (socket, eventEmitter, io) => {
    console.log('vao day');
    socket.on('disconnect', (reason) => {
        console.log('disconnect', socket.id)
    })

    socket.on('join_chat', (chat_id) => {
        socket.join(chat_id);
    })

    // eventEmitter.on('message', (data) => {
    //     console.log('excute', data)
    //     io.in(data.chat_id).emit('message', data)
    // })
}

module.exports = handleSocket