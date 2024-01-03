let carService=require("./carsService")



    
   let getAll=async (req, res)=> {
    try {
        let getAll = await carService.getAll(req,res)
        res.status(200).send(getAll)
    } catch (error) {
        console.log(error)
        res.send({
            status: 500,
            msg:"internal server error"
        })
    }
}

   let getCar = async (req, res) => {
     try {
       let getCar = await carService.getCar(req, res);
       res.status(200).send(getCar);
     } catch (error) {
       console.log(error);
       res.send({
         status: 500,
         msg: "internal server error",
       });
     }
   };

let createCar = async (req, res) => {
    try {
    let createCar = await carService.createCar(req);
    res.status(200).send(createCar);
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      msg: "internal server error",
    });
  }
};

let updateCar = async (req, res) => {
  try {
    let updateCar = await carService.updateCar(req);
    res.status(200).send(updateCar);
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      msg: "internal server error",
    });
  }
};

module.exports={getAll,createCar,updateCar,getCar}