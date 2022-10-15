const DEFAULT_ERROR_CODE = 500

exports.customError = (message, statusCode = DEFAULT_ERROR_CODE, data) => {
    const error = new Error(message)
    console.log(error)
    error.httpStatus = statusCode
    error.data = data
    return error
}