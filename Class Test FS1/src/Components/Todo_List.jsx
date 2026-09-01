import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") {
      return;
    }

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(
      todos.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="card">
      <h2>Todo List</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
