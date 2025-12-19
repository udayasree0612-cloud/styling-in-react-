import React, { useState } from "react";
import TodosList from "./TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div className="App">
      <h1>Fetch + Cleanup Todo App</h1>
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "Unmount Todos" : "Mount Todos"}
      </button>

      {/* Conditionally render TodosList */}
      {showTodos && <TodosList />}
    </div>
  );
}

export default App;
