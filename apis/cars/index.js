let { Router } = require("express")

let carRoute = Router()
let carController = require("./carsController")
carRoute.get("/getAll", carController.getAll)
carRoute.get("/getCar/:carId", carController.getCar);
carRoute.post("/createCar", carController.createCar)
carRoute.put("/update/:carId", carController.updateCar);
carRoute.delete("/delete/:carId", carController.deleteCar);
carRoute.get("/search", carController.search);

module.exports=carRoute