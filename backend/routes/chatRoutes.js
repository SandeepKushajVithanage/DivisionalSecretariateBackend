const express = require('express')

const chatControllers = require('../controllers/chatControllers')
const { verifyUser } = require('../middlewares/authMiddlewares')

const router = express.Router()

router.route('/chat')
    .get(verifyUser, chatControllers.getAllChats)

router.route('/chat/:_id')
    .get(verifyUser, chatControllers.getChat)

module.exports = router