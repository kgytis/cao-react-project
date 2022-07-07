import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import IconButton from "@mui/material/IconButton";

import "../assets/styles/RatingStars.css";

const RatingStars = ({ ...props }) => {
  const { score } = props;

  return (
    <div className="all-rating-stars">
      <div className="evaluation-star">
        <StarIcon style={{ color: "f5c518", fontSize: "32px" }} />
        <span>{score}</span>
      </div>
      <div>
        <IconButton
          onClick={() => {
            console.log("star icon clicked");
          }}
        >
          <StarOutlineIcon
            color="primary"
            style={{ fontSize: "32px" }}
            sx={{ "&:hover": { color: "#5799ef" } }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default RatingStars;
