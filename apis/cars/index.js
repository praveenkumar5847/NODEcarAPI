let { Router } = require("express")
let authMiddleware=require("./../../middlewares/authMiddleware")
let carRoute = Router()
let carController = require("./carsController")
carRoute.get("/getAll", authMiddleware.verifyToken,carController.getAll)
carRoute.get(
  "/getCar/:carId",
  authMiddleware.verifyToken,
  carController.getCar
);
carRoute.post(
  "/createCar",
  authMiddleware.verifyToken,
  carController.createCar
);
carRoute.put(
  "/update/:carId",
  authMiddleware.verifyToken,
  carController.updateCar
);
carRoute.delete(
  "/delete/:carId",
  authMiddleware.verifyToken,
  carController.deleteCar
);
carRoute.get("/search", authMiddleware.verifyToken, carController.search);

module.exports=carRoute