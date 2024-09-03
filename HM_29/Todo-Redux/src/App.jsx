import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <h1>TODO</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
