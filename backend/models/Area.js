const mongoose = require('mongoose')

const { FileSchema } = require('./File')

const { Schema } = mongoose

const AreaSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        default: '',
    },
    image: {
        type: String,
    },
    primaryGN: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    isGNAtive: {
        type: Boolean,
        default: false,
    },
    secondaryGN: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    primaryGSN: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    isGSNAtive: {
        type: Boolean,
        default: false,
    },
    secondaryGSN: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    notices: [ String ]
}, { timestamps: true })

const Area = mongoose.model('Area', AreaSchema)

module.exports = Area