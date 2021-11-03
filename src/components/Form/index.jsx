import "./styles.css";
import { useState } from "react";

function Form({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        value={newTodo}
        placeholder="Nova tarefa"
        onChange={(event) => setNewTodo(event.target.value)}
      ></input>
      <button
        className="newTask"
        onClick={() => addTodo(newTodo)}
        type="button"
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
