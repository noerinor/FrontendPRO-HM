const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Указываем, где находятся статические файлы
app.use(express.static(path.join(__dirname, "../public")));

// Подключение к MongoDB
mongoose.connect("mongodb://localhost:27017/todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Определяем модель задачи
const TodoSchema = new mongoose.Schema({
  description: String,
  checked: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

// CRUD маршруты
app.post("/api/todos", async (req, res) => {
  const newTodo = new Todo({
    description: req.body.description,
    checked: false,
  });
  await newTodo.save();
  res.status(201).send(newTodo);
});

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/api/todos/:id", async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updatedTodo) {
    return res.status(404).send();
  }
  res.status(200).send(updatedTodo);
});

app.delete("/api/todos/:id", async (req, res) => {
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
  if (!deletedTodo) {
    return res.status(404).send();
  }
  await Todo.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
