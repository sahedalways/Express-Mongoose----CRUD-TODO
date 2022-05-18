const express = require("express");
const router = express.Router();
const {
  getTodo,
  getSingleTodo,
  postATodo,
  postMultipleTodo,
  updateTodo,
  deleteTodo,
} = require("../Controllers/todo.controller");

//get todo
router.get("/", getTodo);

//get single todo by id
router.get("/:id", getSingleTodo);

//post a todo
router.post("/", postATodo);

//post multiple todos
router.post("/all", postMultipleTodo);

//update todo
router.put("/:id", updateTodo);

//delete todo
router.delete("/:id", deleteTodo);

module.exports = router;
