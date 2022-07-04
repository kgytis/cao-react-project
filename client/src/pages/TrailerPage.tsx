import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
// import { movie } from "../App";
import { useEffect, useState } from "react";

const TrailerPage = () => {
  const paramsURL = useParams();
  const params = paramsURL.id;
  const oneMovie = `http://localhost:5000/api/movie/${params}`;
  const [data, isPending, error]: any = useFetch(oneMovie);

  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    const stringExtraction = () => {
      const trailer = data.videos.trailers[0];
      const embededString = trailer.slice(
        trailer.indexOf("=") + 1,
        trailer.indexOf("&")
      );
      return embededString;
    };
    !isPending && setTrailer(stringExtraction());
  }, [data, isPending]);

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
            title="YouTube video player"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allow="autoplay"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default TrailerPage;
