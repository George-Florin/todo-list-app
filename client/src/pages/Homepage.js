import Todos from "../components/Todos";
import { Link } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";

const Homepage = () => {
  return (
    <>
      <Link to="/add-todo">
        <MdPostAdd size={18} />
        New Post
      </Link>
      <Todos />
    </>
  );
};

export default Homepage;
