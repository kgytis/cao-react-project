import { useContext } from "react";
import { DataContext, FetchDataType } from "../App";
import { ICardsProp } from "./CardsPoster";
import RatingStars from "./RatingStars";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import "../assets/styles/CardsInfo.css";

// import { movie } from "../hooks/useFetch";

const CardsInfo = ({ ...props }: ICardsProp) => {
  const { isPending, error }: FetchDataType = useContext(DataContext);
  const { data }: any = props; // Check ths place as movie data type doesn't fit due to optional properties???
  const title: string = data.title;
  const score: number = data.IMDB.totalScore;

  const trailerURL: string = `/trailer/${data.id}`;
  const movieURL: string = `/movie/${data.id}`;

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <div className="cards-information">
          <div className="navigation-info">
            <RatingStars score={score} />
            <Link to={movieURL}>
              {" "}
              <h2>{title}</h2>
            </Link>
          </div>
          <div className="buttons-div">
            <Button
              variant="outlined"
              color="primary"
              style={{
                width: "100%",
                background: "#ffffff, opacity 8.00%",
                fontSize: "1.5rem",
              }}
              onClick={() => {
                console.log("watchlist clicked");
              }}
              startIcon={
                <AddIcon style={{ fontSize: "40px", color: "#1976d2" }} />
              }
            >
              Watchlist
            </Button>

            <Link to={trailerURL}>
              <Button
                variant="text"
                style={{
                  width: "100%",
                  background: "#ffffff, opacity 8.00%",
                  fontSize: "1.5rem",
                  color: "white",
                }}
                startIcon={
                  <PlayArrowIcon style={{ fontSize: "40px", color: "grey" }} />
                }
              >
                Trailer
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CardsInfo;
