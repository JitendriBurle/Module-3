export function displayTodos(data) {
    let container = document.getElementById("todos-container");
    container.innerHTML = "";

    data.forEach(todo => {
        let div = document.createElement("div");
        div.style.border = "1px solid #ddd";
        div.style.padding = "10px";
        div.style.margin = "8px";

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Status: ${todo.completed ? "✔ Completed" : "❌ Pending"}</p>
        `;

        container.appendChild(div);
    });
}
