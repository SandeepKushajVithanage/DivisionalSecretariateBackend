const mongoose = require('mongoose')

mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // userFindAndModify: false,
        // useCreateIndex: true,
    })
    .then(() => {

    })
    .catch(error => {
        console.error(error)
    })