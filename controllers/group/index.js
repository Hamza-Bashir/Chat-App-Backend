const router = require("express").Router()
const {addGroup, getAllGroup} = require("../../services/group/index")
const {groupAddSchema} = require("../../middlewares/validation/group")
const validator = require("../../middlewares/validator")

router.post("/add-group", validator(groupAddSchema), addGroup)
router.get("/all-group", getAllGroup)

module.exports = router