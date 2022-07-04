import { useContext } from "react";
import { DataContext, FetchDataType } from "../App";
import { ICardsProp } from "./CardsPoster";
import RatingStars from "./RatingStars";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

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
        <>
          <div>
            <RatingStars score={score} />
            <Link to={movieURL}>
              {" "}
              <h1>{title}</h1>
            </Link>
          </div>
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              console.log("watchlist clicked");
            }}
          >
            <AddIcon color="primary" /> Watchlist
          </Button>
          <Link to={trailerURL}>
            <Button
              variant="text"
              color="primary"
              // onMouseEnter={}
            >
              <PlayArrowIcon color="disabled" /> Trailer
              {/* {add logic, that after mouse enter color will change, needs to be done by using useState} */}
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

export default CardsInfo;
