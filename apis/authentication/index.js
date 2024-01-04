let { Router } = require("express");

let authRoute = Router();
let authController = require("./authController");
authRoute.post("/createUser", authController.createUser)
authRoute.get("/getAll", authController.getAll)
authRoute.post("/login",authController.login)

module.exports=authRoute
