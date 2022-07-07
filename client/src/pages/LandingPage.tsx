import { FC } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../assets/styles/LandingPage.css";

const LandingPage: FC = () => {
  // !!!!!!!!!!!!!!!!!!!! Pataisyti po to, kad nebutu ANY prie tipu, nes kitaip meta error'us
  return (
    <>
      <div className="fan-favorite">
        {/* Prideti po to page, kuriame bus visi movies be overflow */}
        <Link to={"/fan-favorites"}>
          <div className="fan-favorite-div">
            <h1>Fan Favorites</h1>
            <ChevronRightIcon sx={{ fontSize: 80 }} />
          </div>
        </Link>
        <h4>This week's top TV and movies</h4>
      </div>

      <Card />
    </>
  );
};

export default LandingPage;
