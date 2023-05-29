import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TODO } from "../mutations/todoMutations";
import { GET_TODOS } from "../queries/todoQueries";
import Modal from "./Modal";
import "./styles/AddTodo.css";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const [addTodo] = useMutation(ADD_TODO, {
    variables: { title, description, date },
    update(cache, { data: { addTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: [...todos, addTodo] },
      });
    },
  });

  const { loading, error } = useQuery(GET_TODOS);

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || description === "" || date === "") {
      return alert("Please fill in all the fields");
    }

    addTodo(title, description, date);

    setTitle("");
    setDescription("");
    setDate("");
  };

  if (loading) return null;
  if (error) return "Error";

  return (
    <>
      <Modal>
        {!loading && !error && (
          <div className="form-container">
            <form className="form" onSubmit={onSubmit}>
              <label>Date</label>
              <br />
              <input
                type="date"
                format="DD-MM-YYYY"
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
              <div className="submit-btn-container">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        )}
      </Modal>
    </>
  );
};

export default AddTodo;
