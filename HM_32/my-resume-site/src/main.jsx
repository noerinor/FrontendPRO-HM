import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx";
import Swapi from "./pages/Swapi/Swapi.jsx";
import store from "./pages/Swapi/store/store.js";
import store2 from "./pages/TODO/todoStore.js";
import TodoApp from "./pages/TODO/TodoApp.jsx";
// import './index.css';
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route
          path="todo"
          element={
            <Provider store={store2}>
              <TodoApp />
            </Provider>
          }
        />
        <Route
          path="swapi"
          element={
            <Provider store={store}>
              <Swapi />
            </Provider>
          }
        />
      </Route>
    </Routes>
  </Router>
);
