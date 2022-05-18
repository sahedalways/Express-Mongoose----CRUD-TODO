const express = require("express");
const app = express();
const mongoose = require("mongoose");
const handleTodo = require("./routeHandler/todo.routeHandler");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


const PORT = 3000;

//connection with database
mongoose
  .connect("mongodb://127.0.0.1:27017/usersdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("connection successful!"))
  .catch((err) => console.log(err));

//application router

app.use("/todo", handleTodo);

//default error handeler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({
    error: err,
  });
}

app.listen(PORT, () => {
  console.log(`Your server is running at http://localhost:${PORT}`);
});
