import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import "../components/styles/Homepage.css";

const Homepage = () => {
  return (
    <>
      <div>
        <AddTodo />
      </div>
      <Todos />
    </>
  );
};

export default Homepage;
