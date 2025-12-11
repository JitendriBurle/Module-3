import { displayTodos } from "./displayTodos.js";

let isLoggedIn = localStorage.getItem("loggedIn");

if (!isLoggedIn) {
    alert("Please login first!");
    window.location.href = "login.html";
}

async function fetchTodos() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await res.json();
        displayTodos(data.slice(0, 20)); // show first 20 todos
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

fetchTodos();
