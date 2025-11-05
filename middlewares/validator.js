const code = require("../constants/httpStatus")
const AppError = require("../utilis/AppError")

const validator = (schema) => {
    return (req,res,next) => {
        const {error} = schema.validate(req.body)

        if(error){
            const errorMsg = error.details.map((err) => err.message)
            next(new AppError(errorMsg, code.BAD_REQUEST))
        }

        next()
    }
}

module.exports = validator