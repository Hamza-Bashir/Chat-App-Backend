const router = require("express").Router()
const {addEmployee, loginEmployee} = require("../../services/employee")

router.post("/add-employee", addEmployee)
router.post("/login-employee", loginEmployee)

module.exports = router