import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import axios from "axios";

const Filter = ({ setFilter }) => {
  const [key, setKey] = useState("");
  const [capo, setCapo] = useState("");
  const [tuning, setTuning] = useState("");
  const [genre, setGenre] = useState("");
  const [time, setTime] = useState("");
  const resData = useLoaderData();

  const keyHandler = (e) => {
    setKey(e.target.value);
  };
  const capoHandler = (e) => {
    setCapo(e.target.value);
  };
  const tuningHandler = (e) => {
    setTuning(e.target.value);
  };
  const genreHandler = (e) => {
    setGenre(e.target.value);
  };
  const timeHandler = (e) => {
    setTime(e.target.value);
  };
  const filterHandler = (e) => {
    setFilter({
      genre: genre,
      capo: capo,
      tuning: tuning,
      songKey: key,
      timeSignature: time,
    });
    setGenre("");
    setCapo("");
    setTuning("");
    setKey("");
    setTime("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <Dropdown name={"Genre"}>
        {resData.genres.map((e) => (
          <li className="dropdown-item" role="option" key={e}>
            <button
              className="dropdown-item-btn"
              id="Difficulty"
              type="button"
              value={e}
              onClick={genreHandler}
              style={{
                width: "100%",
                border: "none",
                textAlign: "left",
                backgroundColor: "white",
              }}
            >
              {e}
            </button>
          </li>
        ))}
      </Dropdown>
      <Dropdown name={"Capo"}>
        {resData.capoList.map((e) => (
          <li className="dropdown-item" role="option" key={e}>
            <button
              className="dropdown-item-btn"
              type="button"
              value={e}
              onClick={capoHandler}
              style={{
                width: "100%",
                border: "none",
                textAlign: "left",
                backgroundColor: "white",
              }}
            >
              {e}
            </button>
          </li>
        ))}
      </Dropdown>
      <Dropdown name={"Tunning"}>
        {resData.TuningList.map((e) => (
          <li className="dropdown-item" role="option" key={e}>
            <button
              className="dropdown-item-btn"
              type="button"
              value={e}
              onClick={tuningHandler}
              style={{
                width: "100%",
                border: "none",
                textAlign: "left",
                backgroundColor: "white",
              }}
            >
              {e}
            </button>
          </li>
        ))}
      </Dropdown>
      <Dropdown name={"Song key"}>
        {resData.songKeys.map((e) => (
          <li className="dropdown-item" role="option" key={e}>
            <button
              className="dropdown-item-btn"
              type="button"
              value={e}
              onClick={keyHandler}
              style={{
                width: "100%",
                border: "none",
                textAlign: "left",
                backgroundColor: "white",
              }}
            >
              {e}
            </button>
          </li>
        ))}
      </Dropdown>
      <Dropdown name={"Time Signature"}>
        {resData.timeSignatures.map((e) => (
          <li className="dropdown-item" role="option" key={e}>
            <button
              className="dropdown-item-btn"
              type="button"
              value={e}
              onClick={timeHandler}
              style={{
                width: "100%",
                border: "none",
                textAlign: "left",
                backgroundColor: "white",
              }}
            >
              {e}
            </button>
          </li>
        ))}
      </Dropdown>
      <button className="btn btn-info" type="button" onClick={filterHandler}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;

export async function loader() {
  const response = await fetch(
    "http://localhost:8081/Lyrics/GetDropDownDataForPublication"
  );
  const resData = response.json();
  return resData;
}
