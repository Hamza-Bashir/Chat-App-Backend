const Group = require("../../models/group/index")
const User = require("../../models/auth/index")
const AppError = require("../../utilis/AppError")
const Response = require("../../utilis/sendResponse")
const asyncHandler = require("../../utilis/asyncHandler")
const message = require("../../constants/messages")
const code = require("../../constants/httpStatus")


// -------------------- add group ------------------

const addGroup = asyncHandler(async (req,res,next) => {

    const {id} = req.user

    const {groupName} = req.body

    const existingUser = await User.findOne({_id : id})

    if(existingUser.role !== "admin"){
        return next(new AppError(message.AUTH.UNAUTHORIZED, code.UNAUTHORIZED))
    }

    const existingGroup = await Group.findOne({groupName : groupName})

    if(existingGroup){
        return next(new AppError(message.GROUP.GRP_ALREADY_EXIST, code.RECORD_EXIST))
    }

    await Group.create({
        groupName,
        groupAdmin : id
    })

    Response(res, code.OK, true, "Group created successfully")
})


// -------------------- get all group ------------------

const getAllGroup = asyncHandler(async (req,res,next) => {
    
    const allGroup = await Group.find({})

    if(!allGroup){
        return next(new AppError(message.GROUP.GRP_NOT_FOUND, code.NOT_FOUND))
    }

    Response(res, code.OK, true, "Group Found", {allGroup})
})


module.exports = {addGroup, getAllGroup}