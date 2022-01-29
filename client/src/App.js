import BookList from "./components/BookList";
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import AddBook from "./components/AddBook";


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Dhia Meniaoui</h1>
        <BookList></BookList>
        <AddBook></AddBook>
      </div>
    </ApolloProvider>
  );
}

export default App;
