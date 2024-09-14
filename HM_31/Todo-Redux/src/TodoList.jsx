import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleComplete, editTodo, clearTodos, loadRequest } from './todoSlice';
import './index.css';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const [editInput, setEditInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleEditTodo = (index) => {
    if (editInput.trim()) {
      dispatch(editTodo({ index, newText: editInput }));
      setEditInput('');
      setEditIndex(null);
    }
  };

  const startEdit = (index, text) => {
    setEditIndex(index);
    setEditInput(text);
  };

  return (
    <div className="container">
      <div  className='form'>
        <h1>TODO List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            outline: "none",
            width: "80%",
            marginBottom:  "10px"
          }}
        />
        <button style={{padding: "10px", marginLeft: "10px"}} type="submit">Add</button>
      </form>

      <button onClick={() => dispatch(loadRequest())}>Load Todos</button>
      <button style={{marginLeft: "10px"}} onClick={() => dispatch(clearTodos())}>Clear All</button>

      </div>
      
      <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        listStyle: "none",
        padding: 30,
      }}>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text" 
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  style={{
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    outline: "none",
                    width: "80%",
                    marginBottom:  "10px"
                  }}
                />
                <button style={{marginLeft: "10px"}} onClick={() => handleEditTodo(index)}>Save</button>
              </div>
            ) : (
              <div className='todo'>
                <span
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  onClick={() => dispatch(toggleComplete(index))}
                >
                  {todo.text}
                </span>
                <div className='todo-buttons'>
                <button onClick={() => startEdit(index, todo.text)}>Edit</button>
                <button style={{marginLeft: "10px"}} onClick={() => dispatch(removeTodo(index))}>Remove</button>
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
