import "./App.css";
import useFetch from "./hooks/useFetch";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";

// Page imports
import LandingPage from "./pages/LandingPage";
import TrailerPage from "./pages/TrailerPage";
import MoviePage from "./pages/MoviePage";

export interface FetchDataType {
  data: movie[] | undefined | object[];
  isPending: boolean;
  error: null | string;
}

export type movie = {
  IMDB: { totalScore: number; userRatings: object[] };
  castAndCrew: { actors: object[]; director: string; writers: object[] };
  description: string;
  eiriniCaregory: string;
  genres: Array<string>;
  id: number;
  length: number;
  photos: { cutscenes: string[]; poster: string[] };
  popularity: { ranking: number; weeklyChange: number };
  releaseYear: number;
  reviews: { users: number; critics: number; metascore: number };
  title: string;
  videos: { trailers: string[]; cutscenes: string[] };
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
            <Route path="/trailer/:id" element={<TrailerPage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Routes>
        </DataContext.Provider>
      )}
    </div>
  );
}

export default App;
