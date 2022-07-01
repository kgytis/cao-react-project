import "./App.css";
import useFetch from "./hooks/useFetch";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";

// Page imports
import LandingPage from "./pages/LandingPage";

export interface FetchDataType {
  data: movie[] | undefined | object[];
  isPending: boolean;
  error: null | string;
}

type movie = {
  IMDB: object;
  castAndCrew: object;
  description: string;
  eiriniCaregory: string;
  genres: Array<string>;
  id: number;
  length: number;
  photos: object;
  popularity: object;
  releaseYear: number;
  reviews: object;
  title: string;
  videos: object;
};

export const DataContext = createContext<FetchDataType>({
  data: [{}],
  isPending: true,
  error: null,
});
const allMovies = "http://localhost:5000/api/movies";
// const oneMovie = "http://localhost:5000/api/movie";

function App() {
  const [data, isPending, error] = useFetch(allMovies);
  // const { data, isPending, error } = useFetch(`${oneMovie}/1`);
  console.log(data);
  return (
    <div className="App">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <DataContext.Provider value={{ data, isPending, error }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </DataContext.Provider>
      )}
    </div>
  );
}

export default App;
