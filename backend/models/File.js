const mongoose = require('mongoose')

const { Schema } = mongoose

const FileSchema = new Schema({
    mimeType: {
        type: String,
        required: true,
    },
    filePath: {
        type: String,
        required: true,
    },
    fileSize: {
        type: Number,
        required: true,
    }
}, { timestamps: true })

exports.FileSchema = FileSchema
exports.File = mongoose.model('File', FileSchema)
