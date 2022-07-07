import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";

import "../../assets/styles/Movie/MovieHeader.css";

const MovieHeader = ({ ...props }) => {
  const { movieData } = props;

  return (
    <>
      <div className="header-info">
        <div className="left-side">
          <h1>{movieData.title}</h1>
          <div className="list-of-info">
            {/* <a href=""> */}
            <li>{movieData.releaseYear}</li>
            {/* </a> */}
            {/* <a href=""> */}
            <li>{movieData.eirinCategory}</li>
            {/* </a> */}
            {/* <a href=""> */}
            <li>
              {Math.floor(movieData.length / 60)} h {movieData.length % 60} min
            </li>
            {/* </a> */}
          </div>
        </div>
        <div className="right-side">
          <div className="imdb-rating-container">
            <h3>IMDb RATING</h3>
            <div className="imdb-sub-rating-container">
              <div className="star-div">
                <StarIcon style={{ color: "f5c518", fontSize: "40px" }} />
              </div>
              <div>
                <div className="upper-valuation">
                  <span>{movieData.IMDB.totalScore}</span>
                  <span>/10</span>
                </div>
                <div className="lower-valuation">
                  {Math.floor(
                    movieData.IMDB.userRatings.reduce(
                      (prevVal: number, curVal: any) => prevVal + curVal.votes,
                      0
                    ) / 1000
                  )}{" "}
                  k
                </div>
              </div>
            </div>
          </div>
          <div className="your-rating-container">
            <h3>YOUR RATING</h3>
            <Button
              variant="text"
              color="primary"
              style={{
                width: "100%",
                background: "#ffffff, opacity 8.00%",
                fontSize: "1.9rem",
                fontWeight: "bolder",
              }}
              onClick={() => {
                console.log("watchlist clicked");
              }}
              startIcon={
                <StarOutlineIcon
                  style={{
                    fontSize: "3rem",
                    color: "#1976d2",
                    fontWeight: "bolder",
                  }}
                />
              }
            >
              Rate
            </Button>
          </div>
          <div className="popularity-container">
            <h3>POPULARITY</h3>
            <Button
              variant="text"
              color="primary"
              style={{
                width: "100%",
                background: "#ffffff, opacity 8.00%",
                fontSize: "1.9rem",
                fontWeight: "bolder",
                color: "white",
              }}
              onClick={() => {
                console.log("watchlist clicked");
              }}
              startIcon={
                movieData.popularity.weeklyChange > 0 ? (
                  <ArrowCircleUpIcon
                    style={{ color: "green", fontSize: "3rem" }}
                  />
                ) : (
                  <ArrowCircleDownIcon
                    style={{ color: "red", fontSize: "3rem" }}
                  />
                )
              }
            >
              {movieData.popularity.weeklyChange > 0 ? (
                <p>{movieData.popularity.ranking}</p>
              ) : (
                <p>{movieData.popularity.ranking}</p>
              )}
              {movieData.popularity.weeklyChange > 0 ? (
                <>
                  <ArrowDropUpIcon
                    style={{ color: "grey", fontSize: "2rem" }}
                  />
                  <p>{movieData.popularity.weeklyChange}</p>
                </>
              ) : (
                <>
                  <ArrowDropDownIcon
                    style={{ color: "grey", fontSize: "2rem" }}
                  />
                  <p>{movieData.popularity.weeklyChange}</p>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHeader;
