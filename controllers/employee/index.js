const router = require("express").Router()
const {addEmployee, loginEmployee} = require("../../services/employee")
const {employeeLoginSchema, employeeRegisterSchema} = require("../../middlewares/validation/auth")
const validator = require("../../middlewares/validator")

router.post("/add-employee", validator(employeeRegisterSchema), addEmployee)
router.post("/login-employee", validator(employeeLoginSchema), loginEmployee)

module.exports = router