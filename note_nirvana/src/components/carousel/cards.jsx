import tophits from "./tophits.png";
import rock from "./classicRock.jpeg";
import altrock from "./90sAlternative.jpeg";
import hiphop from "./Hiphop.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Cards = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        <Link
          class="card"
          style={{ width: "25rem", height: "18rem" }}
          to="/chords/TopHits"
        >
          <img
            src={hiphop}
            class="card-img-top"
            style={{ objectFit: "cover", height: "75%" }}
            alt="Top Hits"
          />
          <div class="card-body">
            <p class="card-text">
              <h5> Hip Hop</h5>
            </p>
          </div>
        </Link>
        {/*  */}
        <Link
          class="card"
          style={{ width: "25rem", height: "18rem" }}
          to="/chords/ClassicRock"
        >
          <img
            src={rock}
            class="card-img-top"
            style={{ objectFit: "cover", height: "75%" }}
            alt="Classic Rock Music"
          />
          <div class="card-body">
            <p class="card-text">
              <h5> Classic Rock</h5>
            </p>
          </div>
        </Link>
        {/*  */}
        <Link
          class="card"
          style={{ width: "25rem", height: "18rem" }}
          to="/chords/90sAlternative"
        >
          <img
            src={altrock}
            class="card-img-top"
            style={{ objectFit: "cover", height: "75%" }}
            alt="90's Alternative"
          />
          <div class="card-body">
            <p class="card-text">
              <h5>90's Alternative</h5>
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Cards;
