import "./styles.css";

function TodoList({ todos, handleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button className="doTask" onClick={() => handleTodo(todo)}>
            Concluir tarefa
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
