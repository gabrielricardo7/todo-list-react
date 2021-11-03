import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos.values);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleTodo(todo) {
    setTodos(todos.filter((x) => x !== todo));
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList todos={todos} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
