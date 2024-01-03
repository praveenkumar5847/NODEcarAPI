let { Router } = require("express")
let router = Router()



router.use("/cars",require("./apis/cars/index") )

module.exports=router