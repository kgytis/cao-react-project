import "./App.css";
import useFetch from "./hooks/useFetch";

// const allMovies = "http://localhost:5000/api/movies";
const oneMovie = "http://localhost:5000/api/movie";

function App() {
  // const { data, isPending, error } = useFetch(allMovies);
  const { data, isPending, error } = useFetch(`${oneMovie}/1`);
  console.log(data);
  console.log(isPending);
  console.log(error);
  return <div className="App"></div>;
}

export default App;
