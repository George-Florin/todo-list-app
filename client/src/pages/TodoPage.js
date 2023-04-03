import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_TODO } from "../queries/todoQueries";
import "../components/styles/TodoPage.css";
import EditTodo from "../components/EditTodo";

const TodoPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_TODO, { variables: { id } });

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      {!loading && !error && (
        <div className="todo-page">
          <Link to="/">Back</Link>
          <h1>{data.todo.title}</h1>
          <p>{data.todo.description}</p>
        </div>
      )}
      <EditTodo todo={data.todo} />
    </>
  );
};

export default TodoPage;
