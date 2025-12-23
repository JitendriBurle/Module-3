import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoItem = ({ todoId, title }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div>
      <span>{title}</span>
      <button onClick={() => deleteTodo(todoId)}>Delete</button>
    </div>
  );
};

export default TodoItem;
