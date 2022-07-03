import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import IconButton from "@mui/material/IconButton";

const RatingStars = ({ ...props }) => {
  const { score } = props;

  return (
    <div>
      <div>
        <StarIcon style={{ color: "f5c518" }} />
        {score}
      </div>
      <IconButton
        onClick={() => {
          console.log("star icon clicked");
        }}
      >
        <StarOutlineIcon color="primary" />
      </IconButton>
    </div>
  );
};

export default RatingStars;
