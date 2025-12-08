async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data.slice(0, 20);
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function deleteTodo(id) {
  const updated = getTodos().filter(t => t.id !== id);
  saveTodos(updated);
  renderTodos();
}

function toggleTodo(id) {
  const updated = getTodos().map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTodos(updated);
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById("todo-list");
  const message = document.getElementById("empty-message");

  const todos = getTodos();
  list.innerHTML = "";

  if (todos.length === 0) {
    message.style.display = "block";
    return;
  }

  message.style.display = "none";

  todos.forEach(todo => {
    const item = document.createElement("div");
    item.className = "todo" + (todo.completed ? " completed" : "");

    item.innerHTML = `
      <span class="title">${todo.title}</span>
      <div>
        <button class="toggle-btn">Toggle</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    item.querySelector(".delete-btn").onclick = () => deleteTodo(todo.id);
    item.querySelector(".toggle-btn").onclick = () => toggleTodo(todo.id);

    list.appendChild(item);
  });
}

async function init() {
  if (!localStorage.getItem("todos")) {
    const data = await fetchTodos();
    saveTodos(data);
  }
  renderTodos();
}

init();
