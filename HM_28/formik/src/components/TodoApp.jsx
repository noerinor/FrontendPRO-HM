import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const formik = useFormik({
    initialValues: {
      newTodo: "",
    },
    validationSchema: Yup.object({
      newTodo: Yup.string()
        .min(5, "Повинно бути не меньше 5 символів")
        .required("Обов'язкове поле"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newTodo = {
        description: values.newTodo,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      resetForm();
    },
  });

  const handleCheckboxChange = (index) => {
    const newTodos = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          className={`form-control ${
            formik.errors.newTodo && formik.touched.newTodo ? "is-invalid" : ""
          }`}
          id="newTodo"
          placeholder="Add a new task"
          {...formik.getFieldProps("newTodo")}
        />
        {formik.errors.newTodo && formik.touched.newTodo ? (
          <div className="invalid-feedback">{formik.errors.newTodo}</div>
        ) : null}
        <button type="submit" className="btn btn-primary mt-2">
          Add Task
        </button>
      </form>

      <ul className="list-group mt-2">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item todo-item">
            <div>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleCheckboxChange(index)}
                className="mr-2"
              />
              {todo.description}
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteTodo(index)}
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
