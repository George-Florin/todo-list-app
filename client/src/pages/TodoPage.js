import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_TODO } from "../queries/todoQueries";
import { MdUpdate } from "react-icons/md";
import "../components/styles/TodoPage.css";

const TodoPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_TODO, { variables: { id } });

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Link to="/update-todo">
        <MdUpdate size={18} />
        Update
      </Link>
      {!loading && !error && (
        <div className="todo-page">
          <Link to="/">Back</Link>
          <h1>{data.todo.title}</h1>
          <p>{data.todo.description}</p>
        </div>
      )}
    </>
  );
};

export default TodoPage;
