import { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
        marginTop: "20px"
      }}>
        {todos.map(todo => (
          <div key={todo.id} style={{
            padding: "16px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px"
          }}>
            <h4>{todo.title}</h4>
            <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
