const router = require("express").Router()
const {addOrganization} = require("../../services/organization/index")
const validator = require("../../middlewares/validator")
const {addOrgSchema} = require("../../middlewares/validation/organization")

router.post("/add-organization", validator(addOrgSchema), addOrganization)

module.exports = router