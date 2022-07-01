import { useContext, FC } from "react";
import { DataContext, FetchDataType } from "../App";

type CardsPosterProps = {
  key?: string;
  data: object;
};

const CardsPoster = ({ ...props }: CardsPosterProps) => {
  const { isPending, error }: FetchDataType = useContext(DataContext);
  const { data }: any = props;
  const poster = data.photos.poster[0];
  console.log(data.photos.poster[0]);
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
