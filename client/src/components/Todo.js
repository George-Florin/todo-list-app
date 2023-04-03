import "./styles/Todo.css";
import DeleteButton from "./DeleteButton";

const Todo = ({ todo }) => {
  return (
    <>
      <div className="todo">
        <div className="todo-text">
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
        </div>
        <div className="todo-btn-container">
          <a href={`/todos/${todo.id}`}>View</a>
          <DeleteButton todoId={todo.id} />
        </div>
      </div>
    </>
  );
};

export default Todo;
