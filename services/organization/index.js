const Organization = require("../../models/organization/index")
const asyncHandler = require("../../utilis/asyncHandler")
const AppError = require("../../utilis/AppError")
const Response = require("../../utilis/sendResponse")
const message = require("../../constants/messages")
const code = require("../../constants/httpStatus")
const {publisher} = require("../../config/redis")


// ---------------------- add organization -----------------------

const addOrganization = asyncHandler(async (req,res,next) => {
    const {id, role} = req.user
    const {organizationName, organizationEmail, organizationPhone,industry} = req.body

    if(role !== "admin"){
        return next(new AppError(message.AUTH.UNAUTHORIZED, code.UNAUTHORIZED))
    }

    const existingOrganization = await Organization.findOne({organizationName:organizationName})

    if(existingOrganization){
        return next(new AppError(message.ORGANIZATION.ORG_EXIST, code.RECORD_EXIST))
    }

    const newOrg = await Organization.create({
        organizationName,
        organizationEmail,
        organizationPhone,
        organizationOwner : id,
        industry
    })

    await publisher.publish("organization_created", JSON.stringify({
        _id : id,
        orgId : newOrg._id
    }))

    Response(res, code.OK, true, "New organization created successfully")
})


module.exports = {addOrganization}