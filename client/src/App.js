import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import "./index.css";
import TodoPage from "./pages/TodoPage";
import Homepage from "./pages/Homepage";

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

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="app">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/todos/:id" element={<TodoPage />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
