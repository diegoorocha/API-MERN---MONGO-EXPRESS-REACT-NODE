const mongoose = require('mongoose')
const serverConfig = require('./serverConfig')

const options = {
    useNewUrlParser: true
}

mongoose.Promise = global.Promise
mongoose.connect(serverConfig.MONGOKEY, options)
    .then(() => {
        console.log('Status Mongodb: Conectado no MLAB!')
    })
    .catch((err) => {
        console.log('Status Mongod: Não conectado!', +err)
    })

module.exports = mongoose