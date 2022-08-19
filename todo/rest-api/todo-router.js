const express = require("express");
const TodoController = require("./todo-controller");
const router = express.Router();

class TodoRouter {
  static getRoutes() {
    console.log("Shubham");

    router.post("/", TodoController.createTodo);

    return router;
  }
}
module.exports = TodoRouter;
