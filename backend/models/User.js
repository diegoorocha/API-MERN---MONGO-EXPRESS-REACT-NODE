const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    }
},{
    timestamps: true
})
const User = mongoose.model('User', UserSchema)
module.exports = User