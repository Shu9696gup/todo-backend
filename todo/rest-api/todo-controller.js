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
  static getTodo = async (req, res) => {
    try {
      const todo = await todoModel.findById(req.params.id);

      if (!todo) {
        return res.status(500).json({
          success: false,
          message: "Product not found",
        });
      }

      res.status(200).json({
        success: true,
        todo,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = TodoController;
