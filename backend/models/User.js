const mongoose = require('mongoose')

const { Schema } = mongoose

const DEFAULT_IMAGE = process.env.DEFAULT_IMAGE ||
    'https://drive.google.com/uc?export=view&id=1r9PvYShxwSmAsdWZDbncW41jmMvov-LW'

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    firebaseId: {
        type: String,
        // required: true,
        trim: true,
        // unique: true,
    },
    displayName: {
        type: String,
        trim: true,
        required: true,
    },
    nic: {
        type: String,
        trim: true,
        default: '',
    },
    fullName: {
        type: String,
        trim: true,
        default: '',
    },
    phoneNumber: {
        type: String,
        trim: true,
        default: '',
    },
    address: {
        type: String,
        trim: true,
        default: '',
    },
    role: {
        type: String,
        trim: true,
        default: 'USER',
        enum: ['USER', 'GN', 'GSN', 'GDN', 'ADMIN']
    },
    profilePicture: {
        type: String,
        default: DEFAULT_IMAGE,
        trim: true,
    },
    area: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Area',
    }
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)

module.exports = User
