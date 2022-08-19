const express = require("express");
const TodoRepository = require("../internal/todo-repository");
const TodoRouter = require("./todo-router");
const app = express();
const bodyParser = require("body-parser")

// const createdb = async () => {
//   await dbConnect();
//   app.use(express.json());

//   app.use("/todo", todoRouter);
// };

// module.exports = createdb;

class TodoRESTAPIServer {
     static async create(){
      await TodoRepository.createDBConnect();
  
      const app = express();
      app.use(bodyParser.json());
        
      app.use('/todo', TodoRouter.getRoutes());
      
  return app;
      
    }
  }
  module.exports = TodoRESTAPIServer;