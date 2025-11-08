const router = require("express").Router()
const {addGroup} = require("../../services/group/index")
const {groupAddSchema} = require("../../middlewares/validation/group")
const validator = require("../../middlewares/validator")

router.post("/add-group", validator(groupAddSchema), addGroup)

module.exports = router