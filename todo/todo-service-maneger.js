const createdb = require("./rest-api/todo-rest-api-server");

const todoManeger =  ()=>{
    createdb();
}
 
module.exports = todoManeger;

// export default class TodoServiceManager {
//      static async createRestAPIServer(){
//       return TodoRESTApiServer.create();
//     }
//   }