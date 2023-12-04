import React from "react";
import music from "../assets/music.jpeg";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel/carousel";
import { useLoaderData } from "react-router-dom";
import Cards from "../components/carousel/cards";

const Homepage = () => {
  const resdata = useLoaderData();
  const topHits = resdata.tophits;
  const topHitsfive = topHits.slice(0, 5);
  const topHitsOther = topHits.slice(5, 10);

  const recentlyAdded = resdata.recentlyUploaded;
  const recentfive = recentlyAdded.slice(0, 5);
  const recentOther = recentlyAdded.slice(5, 10);

  return (
    <>
      <div style={{ paddingLeft: "1.5rem", paddingBottom: "2rem" }}>
        <Cards></Cards>
      </div>

      <p style={{ marginTop: "2rem", paddingLeft: "3rem" }}>Top 10 Tabs</p>
      <Carousel name={"first"}>
        <div
          className="carousel-item active"
          data-bs-interval="10000"
          style={{ marginLeft: "11rem" }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            {topHitsfive.map((e) => (
              <Link
                class="card nav-link"
                style={{ width: "10rem" }}
                to={`/chords/lyrics/${e.id}`}
                key={e.id}
              >
                <img src={music} class="card-img-top" alt="..." />
                <div className="card-body p-3" style={{ height: "5rem" }}>
                  <h6 className="card-title" style={{ fontSize: "small" }}>
                    {e.title}
                  </h6>
                  <h6 className="card-text" style={{ fontSize: "x-small" }}>
                    {e.artist}
                  </h6>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="carousel-item " style={{ marginLeft: "11rem" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            {topHitsOther.map((e) => (
              <Link
                class="card nav-link"
                style={{ width: "10rem" }}
                to={`/chords/lyrics/${e.id}`}
                key={e.id}
              >
                <img src={music} class="card-img-top" alt="..." />
                <div className="card-body p-3" style={{ height: "5rem" }}>
                  <h6 className="card-title" style={{ fontSize: "small" }}>
                    {e.title}
                  </h6>
                  <h6 className="card-text" style={{ fontSize: "x-small" }}>
                    {e.artist}
                  </h6>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Carousel>
      <p style={{ marginTop: "2rem", paddingLeft: "3rem" }}>Recently Added</p>
      <Carousel name={"second"}>
        <div
          className="carousel-item active"
          data-bs-interval="10000"
          style={{ marginLeft: "11rem" }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            {recentfive.map((e) => (
              <Link
                class="card nav-link"
                style={{ width: "10rem" }}
                to={`/chords/lyrics/${e.id}`}
                key={e.id}
              >
                <img src={music} class="card-img-top" alt="..." />
                <div className="card-body" style={{ height: "5rem" }}>
                  <h6 className="card-title" style={{ fontSize: "small" }}>
                    {e.title}
                  </h6>
                  <h6 className="card-text" style={{ fontSize: "x-small" }}>
                    {e.artist}
                  </h6>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="carousel-item " style={{ marginLeft: "11rem" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            {recentOther.map((e) => (
              <Link
                class="card nav-link"
                style={{ width: "10rem" }}
                to={`/chords/lyrics/${e.id}`}
                key={e.id}
              >
                <img src={music} class="card-img-top" alt="..." />
                <div className="card-body" style={{ height: "5rem" }}>
                  <h6 className="card-title" style={{ fontSize: "small" }}>
                    {e.title}
                  </h6>
                  <h6 className="card-text" style={{ fontSize: "x-small" }}>
                    {e.artist}
                  </h6>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Carousel>

      <></>
    </>
  );
};
export default Homepage;

export async function loader() {
  const response = await fetch("http://localhost:8081/Lyrics/GetTopNSongs");
  const resData = response.json();
  return resData;
}
