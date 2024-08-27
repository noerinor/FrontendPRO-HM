import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) {
      return;
    }

    const newTodo = {
      description: inputValue,
      checked: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleTodoChecked = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Add Task
        </button>
      </form>
      <ul className="list-group mt-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`list-group-item ${todo.checked ? "list-group-item-success" : ""}`}
          >
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleTodoChecked(index)}
            />
            <span>{todo.description}</span>
            <button
              className="btn btn-danger btn-sm float-right"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
