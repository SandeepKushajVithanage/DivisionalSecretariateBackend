const Area = require('../models/Area')
const { customError } = require('../configs/errors')

exports.getArea = (req, res, next) => {
    Area.find({})
        .then(areas => {
            res.json(areas)
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.createArea = (req, res, next) => {
    const {
        name,
        description,
        primaryGN,
        secondaryGN,
        primaryGSN,
        secondaryGSN,
    } = req.body

    const area = new Area({
        name,
        description,
        primaryGN,
        secondaryGN,
        primaryGSN,
        secondaryGSN,
    })

    const image = req.file

    if (image) area.image = `${process.env.FILE_STORAGE}/${image.destination}/${image.filename}`

    area.save()
        .then(newArea => {
            res.json(newArea)
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.deleteArea = (req, res, next) => {
    Area.deleteMany({})
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.getSingleArea = (req, res, next) => {
    Area.findById(req.params._id)
        .populate('primaryGN primaryGSN')
        .then(area => {
            if (area) res.json(area)
            else next(customError("This area doesn't exists"))
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.updateSingleArea = (req, res, next) => {
    Area.findById(req.params._id)
        .then(area => {
            if (area) {
                const {
                    name,
                    description,
                    GN,
                    GSN,
                } = req.body

                if (name) area.name = name
                if (description) area.description = description
                if (GN) area.GN = GN
                if (GSN) area.GSN = GSN

                area.save()
                    .then(newArea => {
                        res.json(newArea)
                    })
                    .catch(error => {
                        next(customError(error.message))
                    })
            } else {
                next(customError("This area doesn't exists"))
            }
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.deleteSingleArea = (req, res, next) => {
    Area.findByIdAndDelete(req.params._id)
        .then(area => {
            if (area) res.json(area)
            else next(customError("This area doesn't exists"))
        })
        .catch(error => {
            next(customError(error.message))
        })
}