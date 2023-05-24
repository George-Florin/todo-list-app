import "./styles/Todo.css";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

const Todo = ({ todo }) => {
  return (
    <>
      <div className="todo">
        <div className="todo-text">
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
        </div>
        <div className="todo-btn-container">
          <Link to="/update-todo">Update</Link>
          <DeleteButton todoId={todo.id} />
        </div>
      </div>
    </>
  );
};

export default Todo;

/*<Link to="/update-todo">
  <MdUpdate size={18} />
  Update
</Link>;*/
