$(document).ready(function () {
  const $form = $(".js--form");
  const $input = $(".js--form__input");
  const $todosWrapper = $(".js--todos-wrapper");

  // Загрузка задач с сервера
  function loadTodos() {
    fetch("http://localhost:3000/api/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Loaded todos:", data); // Отладочное сообщение
        renderTodos(data);
      })
      .catch((error) => console.error("Ошибка загрузки задач:", error));
  }
  // Отправка задачи на сервер
  function addTodo(description) {
    return fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, checked: false }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((newTodo) => {
        console.log("New todo added:", newTodo); // Отладочное сообщение
        return newTodo;
      })
      .catch((error) => console.error("Ошибка добавления задачи:", error));
  }

  // Удаление задачи с сервера
  function deleteTodo(id) {
    return fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "DELETE",
    });
  }

  // Обновление задачи на сервере
  function updateTodo(todo) {
    return fetch(`http://localhost:3000/api/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then((response) => response.json());
  }

  // Отрисовывает все задачи
  function renderTodos(todos) {
    $todosWrapper.empty();
    todos.forEach(function (todo) {
      const $todoElement = createTodoElement(todo);
      $todosWrapper.append($todoElement);
    });
  }

  // Возвращает элемент списка задач
  function createTodoElement(todo) {
    const $todoItem = $("<li>")
      .addClass("list-group-item todo-item")
      .addClass(todo.checked ? "todo-item--checked" : "");

    const $checkbox = $("<input>")
      .attr("type", "checkbox")
      .prop("checked", todo.checked)
      .on("change", function () {
        todo.checked = !todo.checked;
        updateTodo(todo);
      });

    const $description = $("<span>")
      .addClass("todo-item__description")
      .text(todo.description);

    $todoItem.on("click", function (event) {
      if (event.target.type !== "checkbox") {
        $("#todoDescription").text(todo.description);
        $("#todoModal").modal("show");
      }
    });

    const $deleteButton = $("<button>")
      .addClass("btn btn-danger btn-sm float-right")
      .text("Видалити")
      .on("click", function () {
        deleteTodo(todo._id).then(() => loadTodos());
      });

    $todoItem.append($checkbox, $description, $deleteButton);
    return $todoItem;
  }

  // Обработчик отправки формы для создания новой задачи
  $form.on("submit", function (event) {
    event.preventDefault();
    const description = $input.val().trim();
    if (description.length === 0) {
      return;
    }

    addTodo(description).then(() => {
      loadTodos();
      $input.val("");
    });
  });

  loadTodos();
});
