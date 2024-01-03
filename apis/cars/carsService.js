const carSchema = require("./Model")





    exports.getAll=async(req, res) =>{
        try {
            let data =await carSchema.find({})
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
        
}

    exports.getCar = async (req, res) => {
      try {
        let data = await carSchema.findById(req.params.carId);
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
    

exports.createCar = async (req, res) => {
    try {

        data = await carSchema.create(req.body)
        return Promise.resolve({
          statusCode: 200,
          status: true,
          msg: "cars created",
          data: data,
        });
    } catch (error) {
        console.log(error)
        return Promise.resolve({
          statusCode: 500,
            status: false,
          error:error,
          msg: "internal server error",
        });
    }
}


exports.updateCar = async (req, res) => {
    try {
        console.log(req.params)
        let data = await carSchema.findByIdAndUpdate({ _id: req.params.carId }, req.body)
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
}

