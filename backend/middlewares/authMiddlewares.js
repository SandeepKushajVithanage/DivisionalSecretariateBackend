const admin = require('../firebase')
const User = require('../models/User')

exports.verifyUser = async (req, res, next) => {
    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.authorization)

        const user = await User.findOne({ email: firebaseUser.email })

        if (user) {
            req.user = user
        } else {
            let newUser = await new User({
                email: firebaseUser.email,
                displayName: firebaseUser.name ? firebaseUser.name : firebaseUser.email.split('@')[0],
                profilePicture: firebaseUser.picture ? firebaseUser.picture : undefined,
            }).save()
            req.user = newUser
        }
        next()
    } catch (error) {
        res.status(401).json(error.message)
    }
}
