const router = require("express").Router()
const {addEmployee} = require("../../services/employee")

router.post("/add-employee", addEmployee)

module.exports = router