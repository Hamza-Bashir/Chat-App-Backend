const User = require("../../models/auth/index")
const asyncHandler = require("../../utilis/asyncHandler")
const AppError = require("../../utilis/AppError")
const Response = require("../../utilis/sendResponse")
const code = require("../../constants/httpStatus")
const message = require("../../constants/messages")
const {publisher} = require("../../config/redis")
const Org = require("../../models/organization/index")
const {hashPassword, comparePassword} = require("../../utilis/bcryptPassword")


// -------------------------- add employee --------------------

const addEmployee = asyncHandler(async (req,res,next) => {

    const {id, role} = req.user
    const {name, email, password} = req.body

    if(role !== "admin"){
        return next(new AppError(message.AUTH.UNAUTHORIZED, code.UNAUTHORIZED))
    }


    const existingUser = await User.findOne({email : email})

    const existingOrg = await Org.findOne({organizationOwner : id})

    if(existingUser){
        return next(new AppError(message.USER.ALREADY_EXISTS, code.RECORD_EXIST))
    }

    if(!existingOrg){
        return next(new AppError(message.ORGANIZATION.NOT_FOUND, code.NOT_FOUND))
    }

    const hashPass = await hashPassword(password, 10)

    const newEmployee = await User.create({
        name,
        email,
        password : hashPass, 
        organizationId : existingOrg._id
    })


    await publisher.publish("employee_created", JSON.stringify({
        id,
        organizationMember : newEmployee._id
    }))

    Response(res, code.OK, true, "New Employee Create SUccessfully")

})


module.exports = {addEmployee}