const userSchema=require("./Model")
const bcrypt = require("bcrypt")
let jwt =require("jsonwebtoken")

exports.createUser = async (req, res) => {
    try {
        let body = {}
        body.mobNo = req.body.mobNo;
        let hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword);
        body.password = hashedPassword;
    data = await userSchema.create(body);
    return Promise.resolve({
      statusCode: 200,
      status: true,
      msg: "user created",
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

exports.getAll = async (req, res) => {
  try {
    let data = await userSchema.find({});
    return Promise.resolve({
      statusCode: 200,
      status: true,
      msg: "users Fetched",
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


exports.login = async (req, res) => {
    try {
        let data = {}
        if (req.body.mobNo && req.body.password) {
            data = await userSchema.find({ mobNo: req.body.mobNo });
        }
        
       let token =""
    
       if( await bcrypt.compare( req.body.password, data[0].password ) == true) {
           let secretKey = "javainuse-secret-key";
            token=await jwt.sign(req.body,secretKey,{expiresIn:"1h"})
       } else {
           return Promise.resolve({
             statusCode: 500,
             status: false,
             msg: "invalid Mobile number or password",
           });
        }
    
    return Promise.resolve({
      statusCode: 200,
      status: true,
      msg: "user login successfull",
      token: token,
    });
    } catch (error) {
        console.log(error)
    return Promise.resolve({
      statusCode: 500,
      status: false,
      msg: "internal server error",
    });
  }
};