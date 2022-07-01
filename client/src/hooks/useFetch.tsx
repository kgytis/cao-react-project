import { useEffect, useState } from "react";
import axios from "axios";

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
