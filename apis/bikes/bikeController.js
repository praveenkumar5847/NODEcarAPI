let bikeService = require("./bikeService");

let getAll = async (req, res) => {
  try {
    let getAll = await bikeService.getAll(req, res);
    res.status(200).send(getAll);
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      msg: "internal server error",
    });
  }
};
let search = async (req, res) => {
  try {
    let search = await bikeService.search(req, res);
    res.status(200).send(search);
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      msg: "internal server error",
    });
  }
};

let getBike = async (req, res) => {
  try {
    let getBike = await bikeService.getBike(req, res);
    res.status(200).send(getBike);
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      msg: "internal server error",
    });
  }
};

let createBike = async (req, res) => {
  try {
    let createBike = await bikeService.createBike(req);
    res.status(200).send(createBike);
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      msg: "internal server error",
    });
  }
};

let updateBike = async (req, res) => {
  try {
    let updateBike = await bikeService.updateBike(req);
    res.status(200).send(updateBike);
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      msg: "internal server error",
    });
  }
};

let deleteBike = async (req, res) => {
  try {
    let deleteBike = await bikeService.deleteBike(req);
    res.status(200).send(deleteBike);
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      msg: "internal server error",
    });
  }
};

module.exports = {
  getAll,
  createBike,
  updateBike,
  getBike,
  deleteBike,
  search,
};
