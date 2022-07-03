import { useContext } from "react";
import { DataContext, FetchDataType } from "../App";
export type ICardsProp = {
  key?: string;
  data: object;
};

const CardsPoster = ({ ...props }: ICardsProp) => {
  const { isPending, error }: FetchDataType = useContext(DataContext);
  const { data }: any = props;
  const poster = data.photos.poster[0];
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {poster && (
        <div>
          <img
            src={poster}
            alt={`${data.title}-poster`}
            className="card-poster"
          />
        </div>
      )}
    </>
  );
};

export default CardsPoster;
