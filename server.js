const app = require("./app");
const dbConnect = require("./todo/internal/todo-repository");
const dotenv = require("dotenv");
//CONFIG
dotenv.config({path:"config/config.env"})


//DATABASE CONECTION
// dbConnect();

app.listen(process.env.PORT,()=>{
    console.log(`server is listening on ${process.env.PORT}`)
})