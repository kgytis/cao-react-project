import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (URL: string) => {
  console.log(URL);
  const [data, setData] = useState([{}]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect((): void => {
    axios
      .get(URL)
      .then((response) => {
        return response.data;
      })
      .then((fetchData: object[]) => {
        setData(fetchData);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [URL]);
  return { data, isPending, error };
};

export default useFetch;
