const express = require('express')
const bodyParser = require('body-parser')

const serverConfig = require('./config/serverConfig')
const mongoConfig = require('./config/mongoConfig')

const server = express()

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    next()
})

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

const userRoute = require('./routes/userRoute')
server.use('/u', userRoute)

server.listen(serverConfig.PORT, () => {
    console.log('Status Express: Conectado na porta:' +serverConfig.PORT)
})