import { useContext, useState } from "react";
import { DataContext, FetchDataType } from "../App";
import { ICardsProp } from "./CardsPoster";
import RatingStars from "./RatingStars";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// import { movie } from "../App";

const CardsInfo = ({ ...props }: ICardsProp) => {
  const { isPending, error }: FetchDataType = useContext(DataContext);
  const { data }: any = props; // Check ths place as movie data type doesn't fit due to optional properties???
  const title: string = data.title;
  const score: number = data.IMDB.totalScore;

  const trailerURL: string = `/trailer/${data.id}`;
  // enum color {
  //     enabled = 'enabled',
  //     disabled = 'disabled'
  // }

  //   const {hoverColor, setHoverColor} = useState<color>(color.enabled)

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <>
          <div>
            <RatingStars score={score} />
            <Link to="">
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
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              console.log("trailer clicked");
            }}
            // onMouseEnter={}
          >
            <PlayArrowIcon color="disabled" /> Trailer
            {/* {add logic, that after mouse enter color will change, needs to be done by using useState} */}
          </Button>
          <Link to={trailerURL}>Play</Link>
        </>
      )}
    </>
  );
};

export default CardsInfo;
