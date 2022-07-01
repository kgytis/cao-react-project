import { useContext, FC } from "react";
import { DataContext, FetchDataType } from "../App";
import CardsInfo from "./CardsInfo";
import CardsPoster from "./CardsPoster";

const Card: FC = () => {
  const { data, isPending, error }: FetchDataType = useContext(DataContext);
  console.log(data);
  console.log(isPending);
  console.log(error);
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data &&
        data.map((movie: any, index: number) => {
          return (
            <div key={`card-${index}`}>
              <CardsPoster key={`cardsPoster-${index}`} data={movie} />
              <CardsInfo key={`cardsInfo-${index}`} data={movie} />
            </div>
          );
        })}
    </>
  );
};

export default Card;
