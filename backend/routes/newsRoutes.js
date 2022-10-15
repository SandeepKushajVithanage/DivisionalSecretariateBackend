const express = require('express')

const newsControllers = require('../controllers/newsControllers')
const { fileUpload } = require('../middlewares/fileMiddlewares')
const { verifyUser } = require('../middlewares/authMiddlewares')

const router = express.Router()

router.route('/news')
    .get(newsControllers.getNews)
    .post(verifyUser, fileUpload.array('files'), newsControllers.createNews)
    .delete(newsControllers.deleteNews)

router.route('/news/:_id')
    .get(newsControllers.getNews)
    .put(newsControllers.updateSingleNews)
    .delete(newsControllers.deleteNews)

module.exports = router