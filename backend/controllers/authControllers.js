const User = require('../models/User')
const { customError } = require('../configs/errors')

exports.getCurrentUser = (req, res, next) => {
    res.json(req.user)
}

exports.updateCurrentUser = (req, res, next) => {
    const {
        displayName,
        fullName,
        nic,
        phoneNumber,
        address,
        area,
        firebaseId,
    } = req.body

    console.log(req.body)
    const image = req.file

    let user = req.user
    if (displayName) user.displayName = displayName
    if (fullName) user.fullName = fullName
    if (nic) user.nic = nic
    if (phoneNumber) user.phoneNumber = phoneNumber
    if (address) user.address = address
    if (area) user.area = area
    if (firebaseId) user.firebaseId = firebaseId

    if (image) user.profilePicture = `${process.env.FILE_STORAGE || 
        'http://192.168.1.2:3000'}/${image.destination}/${image.filename}`

    user.save()
        .then((updatedUser) => {
            res.json(updatedUser)
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.deleteCurrentUser = (req, res, next) => {
    User.findByIdAndDelete(req.user._id)
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.getUser = (req, res, next) => {
    User.findById(req.params._id)
        .then(user => {
            if (user) res.json(user)
            else next(customError("User doesn't exists.", 404))
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.updateUser = (req, res, next) => {
    User.findById(req.params._id)
        .then(user => {
            if (user) {
                const {
                    displayName,
                    fullName,
                    nic,
                    phoneNumber,
                    address,
                } = req.body
            
                let user = req.user
                if (displayName) user.displayName = displayName
                if (fullName) user.fullName = fullName
                if (nic) user.nic = nic
                if (phoneNumber) user.phoneNumber = phoneNumber
                if (address) user.address = address
            
                user.save()
                    .then((updatedUser) => {
                        res.json(updatedUser)
                    })
                    .catch(error => {
                        next(customError(error.message))
                    })
            } else {
                next(customError("User doesn't exists.", 404))
            }
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.deleteUser = (req, res, next) => {
    User.findByIdAndDelete(req.params._id)
        .then(user => {
            if (user) res.json(user)
            else next(customError("User doesn't exists.", 404))
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.getAllUser = (req, res, next) => {
    User.find({}).
        then(users => {
            res.json(users)
        })
        .catch(error => {
            next(customError(error.message))
        })
}

exports.createUser = (req, res, next) => {
    const {
        email,
        displayName,
        fullName,
        nic,
        phoneNumber,
        address,
    } = req.body

    User.findOne({ email })
        .then(existingUser => {
            if (existingUser) {
                next(customError("This emailis already exists.", 400))
            } else {
                const user = new User({
                    email,
                    displayName,
                    fullName,
                    nic,
                    phoneNumber,
                    address,
                })
            
                user.save()
                    .then(newUser => {
                        res.json(newUser)
                    })
                    .catch(error => {
                        next(customError(error.message))
                    })
            }
        })
        .catch(error => {
            next(customError(error.message))
        })
    
}

exports.deleteAllUser = (req, res, next) => {
    User.deleteMany({})
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            next(customError(error.message))
        })
}