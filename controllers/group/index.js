const router = require("express").Router()
const {addGroup, getAllGroup, addMember} = require("../../services/group/index")
const {groupAddSchema} = require("../../middlewares/validation/group")
const validator = require("../../middlewares/validator")

router.post("/add-group", validator(groupAddSchema), addGroup)
router.get("/all-group", getAllGroup)
router.post("/add-member", addMember)

module.exports = router