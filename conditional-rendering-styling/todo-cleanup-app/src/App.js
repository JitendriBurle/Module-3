import { useState } from "react";
import TodosList from "./TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      <hr />

      {showTodos && <TodosList />}
    </div>
  );
}

export default App;
