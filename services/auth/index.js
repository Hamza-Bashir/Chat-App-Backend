const User = require("../../models/auth/index")
const AppError = require("../../utilis/AppError")
const Response = require("../../utilis/sendResponse")
const code = require("../../constants/httpStatus")
const message = require("../../constants/messages")
const asyncHandler = require("../../utilis/asyncHandler")


// ---------------------- Admin SignUp -----------------------

const adminSignUp = asyncHandler(async (req,res,next) => {

    const {name, email, password, role} = req.body

    const existingRecord = await User.findOne({email})

    if(existingRecord){
        return next(new AppError(message.USER.ALREADY_EXISTS, code.RECORD_EXIST))
    }

    await User.create({
        name,
        email,
        password,
        role
    })

    Response(res, code.OK, true, message.AUTH.REGISTER_SUCCESS)
})


module.exports = {adminSignUp}

