const router = require("express").Router()


router.use(require("../controllers/admin/index"))
router.use(require("../controllers/organization/index"))
router.use(require("../controllers/employee/index"))

module.exports =  router