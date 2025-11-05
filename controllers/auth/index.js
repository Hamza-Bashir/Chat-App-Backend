const router = require("express").Router()
const {adminSignUp, adminSignIn} = require("../../services/auth/index")
const validator = require("../../middlewares/validator")
const {adminRegisterSchema, adminLoginSchema} = require("../../middlewares/validation/auth")


router.post("/admin-register", validator(adminRegisterSchema), adminSignUp)
router.post("/admin-login", validator(adminLoginSchema), adminSignIn)

module.exports = router