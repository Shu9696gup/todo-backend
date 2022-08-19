const todoModel = require("../internal/todo-db");

class TodoController {
  //CREATE TODO

  static createTodo = async (req, res) => {
    try {
      const todo = await todoModel.create(req.body);
      res.status(201).json({
        success: true,
        todo,
      });
    } catch (e) {
      console.log(e);
    }
  };

  //GET TODO BY ID

}

module.exports = TodoController;
