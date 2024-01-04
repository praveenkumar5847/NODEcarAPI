let authService=require("./authService")


let createUser = async (req, res) => {
  try {
    let createUser = await authService.createUser(req);
    res.status(200).send(createUser);
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      msg: "internal server error",
    });
  }
};


let getAll = async (req, res) => {
  try {
    let getAll = await authService.getAll(req, res);
    res.status(200).send(getAll);
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      msg: "internal server error",
    });
  }
};

let login = async (req, res) => {
  try {
    let login = await authService.login(req, res);
    res.status(200).send(login);
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      msg: "internal server error",
    });
  }
};


module.exports={createUser,getAll,login}