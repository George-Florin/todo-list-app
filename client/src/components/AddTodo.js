import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TODO } from "../mutations/todoMutations";
import { GET_TODOS } from "../queries/todoQueries";
import "./styles/AddTodo.css";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [addTodo] = useMutation(ADD_TODO, {
    variables: { title, description },
    update(cache, { data: { addTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: [...todos, addTodo] },
      });
    },
  });

  const { loading, error, data } = useQuery(GET_TODOS);

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      return alert("Please fill in all the fields");
    }

    addTodo(title, description);

    setTitle("");
    setDescription("");
  };

  if (loading) return null;
  if (error) return "Error";

  return (
    <>
      {!loading && !error && (
        <div className="form-container">
          <form className="form" onSubmit={onSubmit}>
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
    </>
  );
};

export default AddTodo;
