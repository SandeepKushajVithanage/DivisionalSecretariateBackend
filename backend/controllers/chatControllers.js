const Message = require('../models/Message')
const { customError } = require('../configs/errors')

exports.getAllChats = (req, res, next) => {
    const id = req.user._id
    Message.aggregate([
        { $match: { $or: [{ user: id }, { reciever: id }] } },
        { $group: { _id: { user: "$user", reciever: "$reciever" } } },
        { $replaceRoot: { "newRoot": "$_id" } }
    ])
        .then(chats => {
            let conversations = []
            const allChats = chats.map(chat => {
                if (chat.user.toString() !== id.toString()) {
                    return chat
                } else {
                    return {
                        ...chat,
                        user: chat.reciever,
                    }
                }
            })
            allChats.forEach(chat => {
                const msg = conversations.findIndex(el => chat.user.toString() === el.user.toString())
                if (msg === -1) conversations.push(chat)
            })
            return Message.populate(conversations, { path: "user" })
        })
        .then(chats => {
            res.json(chats)
        })
        .catch(error => {
            customError(error.message)
        })
}

exports.getChat = (req, res, next) => {
    const myId = req.user._id
    const userId = req.params._id

    Message.find({ $and: [{ $or: [{ user: userId }, { reciever: userId }] }, { $or: [{ user: myId }, { reciever: myId }] }] })
        .populate('user reciever')
        .sort({ _id: -1 })
        .then(messages => {
            res.json(messages)
        })
        .catch(error => {
            customError(error.message)
        })
}