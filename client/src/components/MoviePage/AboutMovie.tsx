import { Button } from "@mui/material";

import "../../assets/styles/Movie/AboutMovie.css";

type writer = {
  name: string;
  role: string;
};

type actor = {
  actorPhoto: string;
  charachter: string[];
  name: string;
};

const AboutMovie = ({ ...props }) => {
  const { movieData } = props;
  return (
    <div className="about-movie-div">
      <div className="genres">
        {movieData.genres.map((genre: string, i: number) => {
          return (
            <Button
              href="#text-buttons"
              key={`genre-${i}`}
              style={{
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: "18px",
                lineHeight: "20px",
                background: "#1f1f1f",
                color: "white",
                border: "1px solid white",
                borderRadius: "16px",
                padding: "6px 18px",
                marginLeft: "8px",
                marginBottom: "8px",
              }}
              sx={{ fontSize: 17 }}
            >
              {genre}
            </Button>
          );
        })}
      </div>
      <div className="about-description">
        <p>{movieData.description}</p>
      </div>
      <hr />
      <div className="director">
        <h2>
          Director : <span>{movieData.castAndCrew.director}</span>
        </h2>
      </div>
      <hr />
      <div className="writers">
        {movieData.castAndCrew.writers.length > 1 ? (
          <h2>Writers</h2>
        ) : (
          <h2>Writer</h2>
        )}
        <div>
          {movieData.castAndCrew.writers.map((writer: writer, i: number) => {
            return (
              <li className="writer" key={`writer-${i}`}>
                {writer.name} ({writer.role}){" "}
              </li>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="stars">
        {movieData.castAndCrew.actors.length > 1 ? (
          <h2>Stars</h2>
        ) : (
          <h2>Star</h2>
        )}
        <div>
          <p>
            {movieData.castAndCrew.actors.map((actor: actor, i: number) => {
              return (
                <span key={`actor-${i}`} className="writer">
                  {actor.name} |{" "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMovie;
