import { useState } from "react";

function Form({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  console.log(newTodo);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        value={newTodo}
        placeholder="Nova tarefa"
        onChange={(event) => setNewTodo(event.target.value)}
      ></input>
      <button onClick={() => addTodo(newTodo)} type="button">
        Enviar
      </button>
    </form>
  );
}

export default Form;
