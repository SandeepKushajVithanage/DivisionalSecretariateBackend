const mongoose = require('mongoose')

const { Schema } = mongoose

const MessageSchema = new Schema({
    text: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    },
    audio: {
        type: String,
    },
    system: {
        type: Boolean,
    },
    sent: {
        type: Boolean,
    },
    received: {
        type: Boolean,
    },
    pending: {
        type: Boolean,
    },
}, { timestamps: true })

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message