let { Router } = require("express");
let authMiddleware=require("./../../middlewares/authMiddleware")
let bikeRoute = Router();
let bikeController = require("./bikeController");
bikeRoute.get("/getAll",authMiddleware.verifyToken, bikeController.getAll);
bikeRoute.get(
  "/getBike/:bikeId",
  authMiddleware.verifyToken,
  bikeController.getBike
);
bikeRoute.post(
  "/createBike",
  authMiddleware.verifyToken,
  bikeController.createBike
);
bikeRoute.put(
  "/update/:bikeId",
  authMiddleware.verifyToken,
  bikeController.updateBike
);
bikeRoute.delete(
  "/delete/:bikeId",
  authMiddleware.verifyToken,
  bikeController.deleteBike
);
bikeRoute.get("/search", authMiddleware.verifyToken, bikeController.search);

module.exports = bikeRoute;
