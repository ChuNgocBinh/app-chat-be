const express = require('express')
const cors = require('cors')
const router = require('./routers')
const app = express()

app.use(cors())
app.use(express.json())

router(app)

app.listen(8080, ()=> {
    console.log('server connected on 8080')
})