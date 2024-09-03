import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);

  return (
    <div>
      <h2>TODOS</h2>
      <ul
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          listStyle: "none",
          padding: 30,
        }}
      >
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#1E1E1E",
              padding: 15,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            {todo}
          </li>
        ))}
      </ul>
      <p>Всего: {todos.length}</p>
    </div>
  );
};

export default TodoList;
