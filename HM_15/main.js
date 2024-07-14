// елементи на сторінці
const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todosWrapper = document.querySelector(".js--todos-wrapper");

// Отримуємо задачі зі стореджа або створою.ємо новий якщо немає
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// Функція зберігання задач в локал сторедж
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Функція для відтворення задачіі
function createTodoElement(todo) {
  const todoItem = document.createElement("li");
  if (todo.checked) {
    todoItem.className = "todo-item todo-item--checked";
  } else {
    todoItem.className = "todo-item";
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.checked;
  checkbox.addEventListener("change", function() {
    todo.checked = !todo.checked;
    saveTodos();
    renderTodos();
  });

  const description = document.createElement("span");
  description.className = "todo-item__description";
  description.textContent = todo.description;

  const deleteButton = document.createElement("button");
  deleteButton.className = "todo-item__delete";
  deleteButton.textContent = "Видалити";
  deleteButton.addEventListener("click", function() {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  });

  todoItem.appendChild(checkbox);
  todoItem.appendChild(description);
  todoItem.appendChild(deleteButton);

  return todoItem;
}

// Треба для відмальовування задачі на сторінці
function renderTodos() {
  todosWrapper.innerHTML = "";
  todos.forEach(function(todo) {
    const todoElement = createTodoElement(todo);
    todosWrapper.appendChild(todoElement);
  });
}

// Обробка відпрравки форми
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const description = input.value.trim();
  if (description.length === 0) {
    return;
  }

  const newTodo = {
    description: description,
    checked: false
  };
  todos.push(newTodo);
  saveTodos();
  renderTodos();

  input.value = "";
});


renderTodos();