import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import TodoPage from "./pages/TodoPage";
import Homepage from "./pages/Homepage";
import AddTodo from "./components/AddTodo";
import Layout from "./pages/Layout";
import "./index.css";
import EditTodo from "./components/EditTodo";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Homepage />,
      },
      {
        path: "/todos/:id",
        element: <TodoPage />,
      },
      {
        path: "/add-todo",
        element: <AddTodo />,
      },
    ],
  },
]);*/

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/todos/:id" element={<TodoPage />} />
              <Route path="/add-todo/" element={<AddTodo />} />
              <Route path="/todos/:id/update-todo" element={<EditTodo />} />
            </Route>
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
