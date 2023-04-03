import { useMutation } from "@apollo/client";
import { GET_TODOS } from "../queries/todoQueries";
import { DELETE_TODO } from "../mutations/todoMutations";
import "./styles/DeleteButton.css";
import { FaTrash } from "react-icons/fa";

const DeleteButton = ({ todoId }) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    variables: { id: todoId },
    refetchQueries: [{ query: GET_TODOS }],
  });

  return (
    <div className="delete-btn-container">
      <button className="delete-btn" onClick={deleteTodo}>
        <FaTrash className="delete-icon" />
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
