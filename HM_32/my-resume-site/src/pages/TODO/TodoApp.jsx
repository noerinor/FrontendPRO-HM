import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import {
  addTodo,
  removeTodo,
  toggleComplete,
  editTodo,
  clearTodos,
  loadRequest,
} from "./todoSlice";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleEditTodo = (index) => {
    if (editInput.trim()) {
      dispatch(editTodo({ index, newText: editInput }));
      setEditInput("");
      setEditIndex(null);
    }
  };

  const startEdit = (index, text) => {
    setEditIndex(index);
    setEditInput(text);
  };

  return (
    <div className="App">
      <div className="form">
        <h1>TODO List</h1>
        <form onSubmit={handleAddTodo}>
          <TextField
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Add new todo"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            margin="normal"
          >
            Add
          </Button>
        </form>

        <Button
          variant="contained"
          color="primary"
          margin="normal"
          onClick={() => dispatch(loadRequest())}
        >
          Load Todos
        </Button>
        <Button
          variant="contained"
          color="secondary"
          margin="normal"
          onClick={() => dispatch(clearTodos())}
          style={{ margin: "10px" }}
        >
          Clear All
        </Button>
      </div>

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          listStyle: "none",
          padding: 30,
        }}
      >
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <TextField
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEditTodo(index)}
                  fullWidth
                  margin="normal"
                >
                  Save
                </Button>
              </div>
            ) : (
              <div direction="row" className="todo">
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  onClick={() => dispatch(toggleComplete(index))}
                >
                  {todo.text}
                </span>
                <div className="todo-buttons">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => startEdit(index, todo.text)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch(removeTodo(index))}
                    style={{ marginLeft: "10px" }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <p>Total: {todos.length}</p>
    </div>
  );
};

export default TodoApp;
