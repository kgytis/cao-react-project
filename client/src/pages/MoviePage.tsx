import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { movie } from "../App";
import { useEffect, useState } from "react";

import MovieHeader from "../components/MoviePage/MovieHeader";
import Media from "../components/MoviePage/Media";
import AboutMovie from "../components/MoviePage/AboutMovie";
import Review from "../components/MoviePage/Review";

import "../assets/styles/Movie/MoviePage.css";

const MoviePage = () => {
  const paramsURL = useParams();
  const params = paramsURL.id;
  const oneMovie = `http://localhost:5000/api/movie/${params}`;
  const [data, isPending, error]: any = useFetch(oneMovie);

  const [movieData, setMovieData] = useState<movie | null>(null);

  useEffect(() => {
    setMovieData(data);
  }, [data]);
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && movieData && (
        <div className="about-movie">
          <MovieHeader movieData={movieData} />
          <Media movieData={movieData} />
          <div className="about-and-review">
            <AboutMovie movieData={movieData} />
            <Review movieData={movieData} />
          </div>
        </div>
      )}
    </>
  );
};

export default MoviePage;
