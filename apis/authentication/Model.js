let mongoose = require("mongoose");

let authSchema = new mongoose.Schema(
  {
        mobNo: { type: String },
      password:{type:String}
  },
  { timestamps: true }
);

let authModel = mongoose.model("auth", authSchema, "auth");
module.exports = authModel;
