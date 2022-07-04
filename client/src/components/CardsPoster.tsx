import { useContext } from "react";
import { DataContext, FetchDataType } from "../App";
import { Link } from "react-router-dom";

export type ICardsProp = {
  key?: string;
  data: object;
};

const CardsPoster = ({ ...props }: ICardsProp) => {
  const { isPending, error }: FetchDataType = useContext(DataContext);
  const { data }: any = props;
  const movieURL: string = `/movie/${data.id}`;

  const poster = data.photos.poster[0];
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {poster && (
        <div>
          <Link to={movieURL}>
            <img
              src={poster}
              alt={`${data.title}-poster`}
              className="card-poster"
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default CardsPoster;
