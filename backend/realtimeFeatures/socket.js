const socketIo = require('socket.io')

const Message = require('../models/Message')
const { sendNotifications } = require('./notification')

let io
const users = []

exports.initIo = httpServer => {
    io = socketIo(httpServer)
    return io
}

exports.getIo = () => {
    if (!io) throw new Error('Socket.io not initialized!')
    return io
}

exports.addUser = newUser => {
    const index = users.findIndex(user => user.userId === newUser.userId)
    if (index === -1) {
        users.push(newUser)
    } else {
        users[index] = newUser
    }
}

exports.removeUser = user => {

}

exports.sendMessage = message => {
    const newMessage = new Message({
        ...message,
        user: message.user._id,
        _id: undefined,
    })
    newMessage.save()
        .then(savedMessage => {
            const reciever = users.find(user => user.userId === savedMessage.reciever.toString())
            savedMessage.populate('user reciever')
                .then(populatedMessage => {
                    if (reciever) io.to(reciever.id).emit('RECIEVE_MESSAGE', populatedMessage)
                    sendNotifications(
                        [populatedMessage.reciever.firebaseId],
                        {
                            title: populatedMessage.user.displayName,
                            body: populatedMessage.text,
                            imageUrl: populatedMessage.image,
                        }
                    )
                })
                .catch(error => {
                    console.error(error)
                })
        })
        .catch(error => {
            console.error(error)
        })
}

exports.initializeMessages = ({ id }) => {
    Message.find({ $or: [{ user: id }, { reciever: id }] })
        .sort({ _id: -1 })
        .populate('user reciever')
        .then(async messages => {
            let conversations = []
            for (let item of messages) {
                const msg = await conversations.findIndex(el => {
                    return ( item.user._id.equals(el.user._id) || item.reciever._id.equals(el.user._id) )
                })
                if (msg === -1) {
                    if (item.user._id.equals(id)) {
                        conversations.push({
                            user: item.reciever,
                            message: item,
                        })
                    } else {
                        conversations.push({
                            user: item.user,
                            message: item,
                        })
                    }
                }
            }
            const reciever = users.find(user => user.userId === id)
            if (reciever) io.to(reciever.id).emit('RETRIEVE_MESSAGES', conversations)
        })
        .catch(error => {
            console.error(error)
        })
}

exports.initializeChat = ({ userId, myId }) => {
    Message.find({ $and: [{ $or: [{ user: userId }, { reciever: userId }] }, { $or: [{ user: myId }, { reciever: myId }] }] })
        .populate('user reciever')
        .sort({ _id: -1 })
        .then(messages => {
            const reciever = users.find(user => user.userId === myId)
            if (reciever) io.to(reciever.id).emit('RETRIEVE_CHAT', messages)
        })
        .catch(error => {
            console.error(error)
        })
}