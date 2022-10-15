const path = require('path')

const News = require('../models/News')
const { File } = require('../models/File')
const { customError } = require('../configs/errors')
const User = require('../models/User')
const { sendNotifications } = require('../realtimeFeatures/notification')

const baseUrl = process.env.BASE_URL || 'http://localhost:8000/'

exports.createNews = async (req, res, next) => {
    const { title, content, visibility } = req.body

    const files = req.files.map((item, index) => {
        return new File({
            mimeType: item.mimetype,
            filePath: `/${item.destination}/${item.filename}`,
            fileSize: item.size,
        })
    })

    const newNews = await new News({
        title: title,
        content: content,
        files: files,
        author: req.user._id,
    })

    if (visibility !== null) newNews.visibility = visibility

    newNews.save()
        .then(async savedNews => {
            try {
                let users = []
                if (visibility) {
                    users = await User.find({ visibility: visibility }).select('firebaseId -_id')
                } else {
                    users = await User.find({}).select('firebaseId -_id')
                }
                const tokens = users?.map(item => item?.firebaseId)
                const notification = {
                    title: title,
                    body: content,
                    // imageUrl: populatedMessage.image,
                }
                sendNotifications(tokens, notification)
            } catch (error) {

            }
            res.json(savedNews)
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.getNews = (req, res, next) => {
    News.find({})
        .populate('author visibility')
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.deleteNews = (req, res, next) => {
    News.deleteMany({})
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.updateSingleNews = (req, res, next) => {
    res.send("Recently not implemented")
}

exports.getSingleNews = (req, res, next) => {
    News.findById(req.params._id)
        .then(news => {
            if (news) res.json(news)
            else next(customError("This news doesn't exists", 404))
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.deleteSingleNews = (req, res, next) => {
    News.findByIdAndDelete(req.params._id)
        .then(news => {
            if (news) res.json(news)
            else next(customError("This news doesn't exists", 404))
        })
        .catch(error => {
            next(customError(error.message))
        })
}