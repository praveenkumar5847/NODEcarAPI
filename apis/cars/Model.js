let mongoose = require("mongoose")

let carSchema = new mongoose.Schema({
  make: { type: String },
    model: { type: String },
  fuel:{type:String},
  mfg: { type: String },
  totalKms: { type: String },
    PhotoUrl: { type: String },
    price:{type:String},
  sold:{type:Boolean}
}, { timestamps: true });

let carModel = mongoose.model("cars", carSchema, "cars")
module.exports=carModel