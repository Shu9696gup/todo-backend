const express = require("express");
const dotenv = require("dotenv")
const TodoServiceManager = require("./todo/todo-service-manager");

dotenv.config({path:"config/config.env"})

class App {
 
  static async startServer() {
    this.app = express();
    const restAPIServices = await this.createRESTApiServer();
    //console.log(restAPIServices);
    this.app.use("/api", restAPIServices);
    //console.log("shu")
    //const port = process.env.PORT;
    //console.log(port)
    const server = this.app.listen(process.env.PORT);
    //console.log(server);
    return server;
  }

  static async createRESTApiServer(){
    const app = express();
    
    const todoServiceRESTApi = await TodoServiceManager.createRestAPIServer();
    app.use('/', todoServiceRESTApi);
    
    return app;
  }

}

module.exports = App;

// export default class App {
//      static app;

//      static async startServer(){
//       this.app = express();

//       const restAPIServices = await this.createRESTApiServer();
//       this.app.use('/api', restAPIServices);

//       const port = ConfigService.getStringValue('server.port');
//       const server = this.app.listen(port);

//       return server;
//     }

//     static async createRESTApiServer() {
//       const app = express();

//       const taskServiceRESTApi = await TaskServiceManager.createRestAPIServer();
//       app.use('/', taskServiceRESTApi);

//       return app;
//     }

//   }
