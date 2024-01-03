let { Router } = require("express");

let bikeRoute = Router();
let bikeController = require("./bikeController");
bikeRoute.get("/getAll", bikeController.getAll);
bikeRoute.get("/getBike/:bikeId", bikeController.getBike);
bikeRoute.post("/createBike", bikeController.createBike);
bikeRoute.put("/update/:bikeId", bikeController.updateBike);
bikeRoute.delete("/delete/:bikeId", bikeController.deleteBike);
bikeRoute.get("/search", bikeController.search);

module.exports = bikeRoute;
