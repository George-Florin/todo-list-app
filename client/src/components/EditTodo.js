import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_TODO } from "../queries/todoQueries";
import { UPDATE_TODO } from "../mutations/todoMutations";
import "./styles/EditTodo.css";
import Modal from "./Modal";

const EditTodo = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [date, setDate] = useState(todo.date);

  const [updateTodo] = useMutation(UPDATE_TODO, {
    variables: { id: todo.id, title, description, date },
    refetchQueries: [{ query: GET_TODO, variables: { id: todo.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !date) {
      return alert("Please fill in all the fields");
    }

    updateTodo(title, description, date);
  };

  return (
    <Modal>
      <div className="edit-form">
        <h3>Update details</h3>
        <form onSubmit={onSubmit}>
          <label>Date</label>
          <br />
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label>Title</label>
          <br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label>Description</label>
          <br />
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <button type="submit">Submit changes</button>
        </form>
      </div>
    </Modal>
  );
};

export default EditTodo;
