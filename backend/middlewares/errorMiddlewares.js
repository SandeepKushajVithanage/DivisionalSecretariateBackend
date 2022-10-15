exports.errorHandler = (err, req, res, next) => {
    res.status(err.httpStatus || 400).json({
        message: err.message,
        data: err.data,
    })
}