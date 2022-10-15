const express = require('express')

const authControllers = require('../controllers/authControllers')
const { verifyUser } = require('../middlewares/authMiddlewares')
const { fileUpload } = require('../middlewares/fileMiddlewares')

const router = express.Router()

router.route('/me')
    .get(verifyUser, authControllers.getCurrentUser)
    .put(verifyUser, fileUpload.single('profilePicture'), authControllers.updateCurrentUser)
    .delete(verifyUser, authControllers.deleteCurrentUser)

router.route('/user')
    .get(verifyUser, authControllers.getAllUser)
    .post(verifyUser, authControllers.createUser)
    .delete(verifyUser, authControllers.deleteAllUser)

router.route('/user/:_id')
    .get(verifyUser, authControllers.getUser)
    .put(verifyUser, authControllers.updateUser)
    .delete(verifyUser, authControllers.deleteUser)


module.exports = router