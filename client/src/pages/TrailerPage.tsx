import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "../assets/styles/TrailerPage.css";

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
        <section className="trailer">
          <div className="video-div">
            <div className="trailer-buttons">
              <Link to={`/movie/${data.id}`}>
                <Button style={{ color: "white", fontSize: "16px" }}>
                  <CloseIcon style={{ color: "grey", fontSize: "40px" }} />{" "}
                  Close
                </Button>
              </Link>
              <Button>
                <ShareIcon style={{ color: "white", fontSize: "40px" }} />
              </Button>
            </div>
            <iframe
              frameBorder="0"
              width="100%"
              height="800"
              src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
              title="YouTube video player"
              data-allowfullscreen
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="trailer-info">
            <div className="poster-and-navigation">
              <div className="image-div">
                <img
                  src={data.photos.poster[0]}
                  width="150"
                  height="250"
                  alt="poster"
                />
              </div>
              <Link to={`/movie/${data.id}`}>
                <div className="trailer-navigation-div">
                  <div>
                    <h2>
                      {data.title} ({data.releaseYear})
                    </h2>
                    <p>
                      {data.eirinCategory}{" "}
                      {data.genres.map((genre: string, i: number) => {
                        return <span key={`genres-${i}`}> | {genre}</span>;
                      })}
                    </p>
                  </div>
                  <div>
                    <Button>
                      <ChevronRightIcon
                        style={{ color: "white", fontSize: "40px" }}
                      />
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
            <article>
              <h1>Final Trailer</h1>
              <p>{data.description}</p>
            </article>
          </div>
        </section>
      )}
    </>
  );
};

export default TrailerPage;
