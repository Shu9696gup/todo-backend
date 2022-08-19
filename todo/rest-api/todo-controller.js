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

   //DELETE TODO
   static deleteTodo = async (req, res) => {
    try {
      let todo = await todoModel.findById(req.params.id);

      if (!todo) {
        return res.status(500).json({
          success: false,
          message: "Product not found",
        });
      }
    } catch (e) {
      console.log(e);
    }

    try {
      todo = await todoModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        todo,
      });
    } catch (e) {
      console.log(e);
    }
  };
 //UPDATE TODO
 static updateTodo = async (req, res) => {
    try {
      const todo = await todoModel.findByIdAndUpdate(req.params.id, req.body);
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
