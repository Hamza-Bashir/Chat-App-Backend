const router = require("express").Router()
const {adminSignUp} = require("../../services/auth/index")
const validator = require("../../middlewares/validator")
const {adminRegisterSchema} = require("../../middlewares/validation/auth")


router.post("/admin-register", validator(adminRegisterSchema), adminSignUp)

module.exports = router