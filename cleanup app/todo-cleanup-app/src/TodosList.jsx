import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

const TodosList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos when component mounts
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data.slice(0, 15)); // Take first 15 todos
    };

    fetchTodos();

    // Cleanup function when component unmounts
    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodosList;
