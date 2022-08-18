const express = require("express");
const { getAllTodos, createTodo, deleteTodo, getTodo, updateTodo } = require("./todo-controller");

const router = express.Router();

router.post("/",createTodo)
router.get("/",getAllTodos)
router.get("/:id",getTodo)
router.delete("/:id",deleteTodo)
router.patch("/:id",updateTodo)

module.exports = router;