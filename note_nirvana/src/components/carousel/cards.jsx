import { useContext } from "react";
import rock from "./classicRock.jpeg";
import altrock from "./90sAlternative.jpeg";
import hiphop from "./Hiphop.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../userLogin/UserContext";
const Cards = () => {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        <Link
          class="card"
          style={{ width: "25rem", height: "18rem" }}
          to="/chords/"
        >
          <img
            src={hiphop}
            class="card-img-top"
            style={{ objectFit: "cover", height: "75%" }}
            alt="Top Hits"
            onClick={() => {
              ctx.setChords({ genre: "Hip-Hop" });
            }}
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
          to="/chords"
        >
          <img
            src={rock}
            class="card-img-top"
            style={{ objectFit: "cover", height: "75%" }}
            alt="Classic Rock Music"
            onClick={() => {
              ctx.setChords({ genre: "Rock" });
            }}
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
          to="/chords"
        >
          <img
            src={altrock}
            class="card-img-top"
            style={{ objectFit: "cover", height: "75%" }}
            alt="90's Alternative"
            onClick={() => {
              ctx.setChords({ genre: "Jazz" });
            }}
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
