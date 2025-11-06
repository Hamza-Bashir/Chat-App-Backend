const router = require("express").Router()


router.use(require("../controllers/admin/index"))
router.use(require("../controllers/organization/index"))

module.exports =  router