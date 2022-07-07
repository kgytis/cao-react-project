import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "../../assets/styles/Movie/Review.css";

const Review = ({ ...props }) => {
  const { movieData } = props;
  return (
    <div className="reviews">
      <div className="review-watchlist">
        <Button
          variant="text"
          onClick={() => {
            console.log("watchlist clicked");
          }}
          style={{
            fontSize: "20px",
            width: "100%",
            justifyContent: "flex-start",
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            lineHeight: "36px",
          }}
          startIcon={
            <AddIcon
              style={{
                fontSize: "20px",
              }}
            />
          }
        >
          add to watchlist
        </Button>
        <Button
          style={{
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            lineHeight: "36px",
          }}
        >
          <ArrowDropDownIcon style={{ color: "white" }} />
        </Button>
      </div>
      <div className="review-score">
        <p>
          <span>{(movieData.reviews.users / 1000).toFixed(2)}K</span> User
          reviews
        </p>
        <p>
          <span>{movieData.reviews.critics} </span> Critic reviews
        </p>
        <p>
          <span className="metaScore">{movieData.reviews.metascore}</span>{" "}
          Metascore
        </p>
      </div>
    </div>
  );
};

export default Review;
