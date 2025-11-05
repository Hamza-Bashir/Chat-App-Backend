const User = require("../../models/auth/index")
const AppError = require("../../utilis/AppError")
const Response = require("../../utilis/sendResponse")
const code = require("../../constants/httpStatus")
const message = require("../../constants/messages")
const asyncHandler = require("../../utilis/asyncHandler")
const {signJwtToken} = require("../../utilis/jwtToken")


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


// ---------------------- Admin SigIn -----------------------

const adminSignIn = asyncHandler(async (req,res, netx) => {
    const {email,password} = req.body

    const existingRecord = await User.findOne({email})

    if(!existingRecord){
        return next(new AppError(message.USER.NOT_FOUND, code.NOT_FOUND))
    }

    if(existingRecord.role !== 'admin'){
        return next(new AppError(message.AUTH.UNAUTHORIZED, code.UNAUTHORIZED))
    }

    const token = signJwtToken({id : existingRecord._id, role : existingRecord.role})

    Response(res, code.OK, true, message.AUTH.LOGIN_SUCCESS, token)
})


module.exports = {adminSignUp, adminSignIn}

