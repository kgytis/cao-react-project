import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";

import "../../assets/styles/Movie/Media.css";

const Media = ({ ...props }) => {
  const { movieData } = props;
  return (
    <>
      <div className="media">
        <div className="poster-container">
          <img
            src={movieData.photos.poster[0]}
            alt="poster"
            className="poster-img"
          />
        </div>

        <div className="cut-scene-container">
          <Link to={`/trailer/${movieData.id}`}>
            <img
              src={movieData.photos.cutscenes[0]}
              alt="cut-scene"
              className="cut-scene-img"
            />
            <div className="play-button">
              <PlayCircleOutlineIcon
                sx={{
                  fontSize: 80,
                  "&:hover": { color: "f5c518" },
                }}
              />
              <span>Play Trailer</span>
            </div>
          </Link>
        </div>

        <div className="all-media-container">
          <div className="all-media-videos">
            <div>
              <VideoLibraryIcon
                sx={{
                  fontSize: 80,
                }}
              />
              <p>
                {movieData.photos.cutscenes.length +
                  movieData.photos.poster.length}{" "}
                videos
              </p>
            </div>
          </div>
          <div className="all-media-images">
            <div>
              <PhotoLibraryIcon
                sx={{
                  fontSize: 80,
                }}
              />
              <p>
                {movieData.videos.cutscenes.length +
                  movieData.videos.trailers.length}{" "}
                photos
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
