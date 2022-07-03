import { FC } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const LandingPage: FC = () => {
  // !!!!!!!!!!!!!!!!!!!! Pataisyti po to, kad nebutu ANY prie tipu, nes kitaip meta error'us
  return (
    <>
      <div>
        {/* Prideti po to page, kuriame bus visi movies be overflow */}
        <Link to={"/fan-favorites"}>
          <h1>
            Fan Favorites <span>{`>`}</span>
          </h1>
          <h4>This week's top TV and movies</h4>
        </Link>
      </div>
      <Card />
    </>
  );
};

export default LandingPage;
