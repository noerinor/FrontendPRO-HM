"use strict";

$(document).ready(function () {
  var $form = $(".js--form");
  var $input = $(".js--form__input");
  var $todosWrapper = $(".js--todos-wrapper");

  // Масив
  var todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Сохранение в сторедж
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Возвращает элемент списка задач
  function createTodoElement(todo) {
    var $todoItem = $("<li>").addClass("list-group-item todo-item").addClass(todo.checked ? "todo-item--checked" : "");

    // Создаем чекбокс для задачи
    var $checkbox = $("<input>").attr("type", "checkbox").prop("checked", todo.checked).on("change", function () {
      todo.checked = !todo.checked;
      saveTodos();
      renderTodos();
    });

    // Создаем элемент описания задачи
    var $description = $("<span>").addClass("todo-item__description").text(todo.description);
    $todoItem.on("click", function (event) {
      if (event.target.type !== "checkbox") {
        $("#todoDescription").text(todo.description);
        $("#todoModal").modal("show");
      }
    });

    // Игнорируем нажатие на чекбокс
    $todoItem.find("input[type=checkbox]").on("click", function (event) {
      event.stopPropagation();
    });

    // Создаем кнопку удаления задачи
    var $deleteButton = $("<button>").addClass("btn btn-danger btn-sm float-right").text("Видалити").on("click", function () {
      var index = todos.indexOf(todo);
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });
    $todoItem.append($checkbox, $description, $deleteButton);
    return $todoItem;
  }

  // Отрисовывает все задачи
  function renderTodos() {
    $todosWrapper.empty();
    todos.forEach(function (todo) {
      var $todoElement = createTodoElement(todo);
      $todosWrapper.append($todoElement);
    });
  }

  // Обработчик отправки формы для создания новой задачи
  $form.on("submit", function (event) {
    event.preventDefault();
    var description = $input.val().trim();
    if (description.length === 0) {
      return;
    }
    var newTodo = {
      description: description,
      checked: false
    };
    todos.push(newTodo);
    saveTodos();
    renderTodos();
    $input.val("");
  });
  renderTodos();
});