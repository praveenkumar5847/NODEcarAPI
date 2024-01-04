let { Router } = require("express")
let router = Router()



router.use("/cars", require("./apis/cars/index"))
router.use("/bikes", require("./apis/bikes/index"))
router.use("/auth",require("./apis/authentication/index"))

module.exports=router