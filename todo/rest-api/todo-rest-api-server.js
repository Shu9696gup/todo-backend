const express = require("express");
const dbConnect = require("../internal/todo-repository");
const todoRouter = require("./todo-router");
const app = express();

const createdb = async () => {
  await dbConnect();
  app.use(express.json());

  app.use("/todo", todoRouter);
};

module.exports = createdb;

// export default class TodoRESTApiServer {
//      static async create(){
//       await TodoRepository.createDBConnection();
  
//       const app = express();
//       app.use(bodyParser.json());
  
//       app.use('/todo', TodoRouter.getRoutes());
  
  
//       return Promise.resolve(app);
//     }
//   }