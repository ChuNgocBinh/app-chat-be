const express = require('express')
const cors = require('cors')
const router = require('./routers')
const { createServer } = require("http");
const { Server } = require('socket.io');
const handleSocket = require('./socket/handle_socket');
const handleIO = require('./socket/handle_io');
const events = require('events')

const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});
app.use(cors())
app.use(express.json())


app.use((req, res, next) => {
    req.eventEmitter = eventEmitter
    next()
})
const eventEmitter = new events.EventEmitter();

handleIO(io, eventEmitter)

io.on("connection", (socket) => {

    console.log('connection', socket.id);
    handleSocket(socket, eventEmitter, io)
});

router(app)

httpServer.listen(8080, () => {
    console.log('server connected on 8080')
})