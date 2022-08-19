const TodoRESTAPIServer = require("./rest-api/todo-rest-api-server");

// const todoManeger =  ()=>{
//     createdb();
// }
 
// module.exports = todoManeger;

class TodoServiceManager {
     static async createRestAPIServer(){
       return TodoRESTAPIServer.create();
    }
  }
  module.exports = TodoServiceManager;