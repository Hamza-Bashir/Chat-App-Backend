const User = require("../../models/auth/index")
const asyncHandler = require("../../utilis/asyncHandler")
const AppError = require("../../utilis/AppError")
const Response = require("../../utilis/sendResponse")
const code = require("../../constants/httpStatus")
const message = require("../../constants/messages")


// -------------------------- add employee --------------------

const addEmployee = asyncHandler(async (req,res,next) => {
    const {role} = req.user
    const {name, email, password} = req.body

    if(role !== "admin"){
        return next(new AppError(message.AUTH.UNAUTHORIZED, code.UNAUTHORIZED))
    }

    const existingUser = await User.findOne({email : email})

    if(existingUser){
        return next(new AppError(message.USER.ALREADY_EXISTS, code.RECORD_EXIST))
    }

    await User.create({
        name,
        email,
        password
    })

    Response(res, code.OK, true, "New Employee Create SUccessfully")

})