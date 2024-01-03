const bikeSchema = require("./Model");

exports.getAll = async (req, res) => {
  try {
    let data = await bikeSchema.find({});
    return Promise.resolve({
      statusCode: 200,
      status: true,
      msg: "bike Fetched",
      data: data,
    });
  } catch (error) {
    return Promise.resolve({
      statusCode: 500,
      status: false,
      msg: "internal server error",
    });
  }
};

exports.search = async (req, res) => {
  try {
    let condition = {};
    let query = req.query;
    if (query.make) {
      condition.make = query.make;
    }
    if (query.model) {
      condition.model = query.model;
    }
    if (query.fuel) {
      condition.fuel = query.fuel;
    }
    if (query.mfg) {
      condition.mfg = query.mfg;
    }
    console.log(condition);
    let data = await bikeSchema.find(condition);
    return Promise.resolve({
      statusCode: 200,
      status: true,
      msg: "bike Fetched",
      data: data,
    });
  } catch (error) {
    return Promise.resolve({
      statusCode: 500,
      status: false,
      msg: "internal server error",
    });
  }
};

exports.getBike = async (req, res) => {
  try {
    let data = await bikeSchema.findById(req.params.bikeId);
    return Promise.resolve({
      statusCode: 200,
      status: true,
      msg: "cars Fetched",
      data: data,
    });
  } catch (error) {
    return Promise.resolve({
      statusCode: 500,
      status: false,
      msg: "internal server error",
    });
  }
};

exports.createBike = async (req, res) => {
  try {
    data = await bikeSchema.create(req.body);
    return Promise.resolve({
      statusCode: 200,
      status: true,
      msg: "bike created",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      statusCode: 500,
      status: false,
      error: error,
      msg: "internal server error",
    });
  }
};

exports.updateBike = async (req, res) => {
  try {
    console.log(req.params);
    let data = await bikeSchema.findByIdAndUpdate(
      { _id: req.params.bikeId },
      req.body
    );
    return Promise.resolve({
      statusCode: 200,
      status: true,
      msg: "cars updated",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      statusCode: 500,
      status: false,
      error: error,
      msg: "internal server error",
    });
  }
};


exports.deleteBike = async (req, res) => {
    try {
        console.log(req.params);
        let data = await bikeSchema.deleteOne({ _id: req.params.bikeId });
        return Promise.resolve({
            statusCode: 200,
            status: true,
            msg: "car deleted",
            data: data,
        });
    } catch (error) {
        console.log(error);
        return Promise.resolve({
            statusCode: 500,
            status: false,
            error: error,
            msg: "internal server error",
        });
    }
}
