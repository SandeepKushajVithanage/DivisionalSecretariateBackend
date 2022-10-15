const express = require('express')

const areaControllers = require('../controllers/areaControllers')
const { fileUpload } = require('../middlewares/fileMiddlewares')

const router = express.Router()

router.route('/area')
    .get(areaControllers.getArea)
    .post(fileUpload.single('image'), areaControllers.createArea)
    .delete(areaControllers.deleteArea)

router.route('/area/:_id')
    .get(areaControllers.getSingleArea)
    .put(areaControllers.updateSingleArea)
    .delete(areaControllers.deleteSingleArea)

module.exports = router