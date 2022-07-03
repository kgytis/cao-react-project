import { useEffect, useState } from "react";
import axios from "axios";

type movie = {
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

const useFetch = (URL: string) => {
  // const [data, setData] = useState([{}]);
  const [data, setData] = useState<movie[] | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect((): void => {
    axios
      .get(URL)
      .then((response) => {
        return response.data;
      })
      .then((fetchData: movie[]) => {
        setData(fetchData);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [URL]);
  return [data, isPending, error] as const;
};

export default useFetch;
