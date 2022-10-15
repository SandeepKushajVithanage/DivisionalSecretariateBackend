const admin = require('../firebase')

exports.sendNotifications = (users, notification) => {
    admin.messaging().sendMulticast({
        tokens: users, // ['token_1', 'token_2', ...]
        notification: notification,
    })
        .then(result => {
            
        })
        .catch(error => {
            console.error(error)
        })
}