const Todo = require("./Model/dbModel");

const getTodo = async (req, res) => {
  await Todo.find({ status: "active" })
    .select({
      _id: 0,
      __v: 0,
    })
    .limit(1)

    .then((data) => {
      res.send(data);
      res.status(200).json({
        message: "Your data is ready now!",
      });
    })
    .catch((err) => {
      err;
    });
};

const getSingleTodo = async (req, res) => {
  await Todo.findById(req.params.id)

    .then((data) => {
      console.log(data);
      res.status(200).json({
        message: "Data has been saved your DB.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
};

const postATodo = async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  newTodo
    .save()
    .then(() => {
      res.status(200).json({
        message: "Your data has been saved successfully!",
      });
    })

    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
};

const postMultipleTodo = async (req, res) => {
  Todo.insertMany({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  }),
    (err) => {
      if (err) {
        res.status(500).json({ err });
      } else {
        res.status(200).json({
          message: "Data inserted successfully!!",
        });
      }
    };
};

const updateTodo = async (req, res) => {
  await Todo.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { title: "babu Sarif" } }
  )

    .then((data) => {
      console.log(data);
      res.status(200).json({
        message: "Your data has been updated",
      });
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id)

    .then(() => {
      res.status(200).json({
        message: "Data has been deleted from your DB.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
};

module.exports = {
  getTodo,
  getSingleTodo,
  postATodo,
  postMultipleTodo,
  updateTodo,
  deleteTodo,
};
