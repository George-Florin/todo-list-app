import Todo from "./Todo";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../queries/todoQueries";
import "./styles/Todos.css";

const Todos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      {data.todos.length > 0 ? (
        <div className="todos-container">
          {data.todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <p>Nothing here</p>
      )}
    </>
  );
};

export default Todos;
