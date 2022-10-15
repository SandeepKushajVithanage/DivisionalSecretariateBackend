const mongoose = require('mongoose')

const { FileSchema } = require('./File')

const { Schema } = mongoose

const NewsSchema = new Schema({
    title: {
        type: String,
        default: 'Untitled',
    },
    content: {
        type: String,
        default: '',
    },
    files: [FileSchema],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    visibility: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Area',
    }
}, { timestamps: true })

const News = mongoose.model('News', NewsSchema)

module.exports = News