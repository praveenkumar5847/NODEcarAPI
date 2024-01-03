const express=require("express")
const client = require("mongoose")
let bodyParser=require("body-parser")
let route = require("./Routes")
let cors=require("cors")


let app = express()
let mongoUrl = "mongodb+srv://praveenkumar04:Praveen5847@student.zhnecge.mongodb.net/";
let Port=8888

function mongoConnection() {
    try {
        client.connect(mongoUrl);
        console.log("mongo db connected")
    } catch (error) {
        console.log(error)
    }
}

mongoConnection()


app.get("/", (req,res) => {
    try {
        res.send({
            status: 200,
            msg:"welcome to car App"
        })
    } catch (error) {
        
    }
})
app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(route)


app.listen(Port, () => {
    console.log(`server started At port ${Port}`)
})
