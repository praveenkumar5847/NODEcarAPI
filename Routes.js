let { Router } = require("express")
let router = Router()



router.use("/cars", require("./apis/cars/index"))
router.use("/bikes",require("./apis/bikes/index"))

module.exports=router