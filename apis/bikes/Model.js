let mongoose = require("mongoose");
let bikeSchema = new mongoose.Schema(
  {
    make: { type: String },
    model: { type: String },
    fuel: { type: String },
    mfg: { type: String },
    totalKms: { type: String },
    PhotoUrl: { type: String },
    price: { type: String },
    sold: { type: Boolean },
  },
  { timestamps: true }
);

let bikeModel = mongoose.model("bikes", bikeSchema, "bikes");
module.exports = bikeModel;
