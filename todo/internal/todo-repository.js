const mongoose = require("mongoose");
const dotenv = require("dotenv");

const dbConnect = ()=>{
    mongoose.connect("mongodb+srv://shu9696gup:shu123gup@cluster0.ayiwk.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true,
        }).then((data)=>{
            console.log(`MongoDB connected to server: ${data.connection.host}`)
        }).catch((err)=>{
            console.log("Shubham")
            console.log(err)
        })
}
module.exports= dbConnect;