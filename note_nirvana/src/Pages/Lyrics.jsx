import parse from "html-react-parser";
import "./Lyrics.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Lyrics = () => {
  const params = useParams();
  const [song, setSong] = useState({
    song_key: "",
    capo_position: "",
    title: "",
    artist: "",
    tuning: "",
    lyrics: "",
    created_on: "",
  });
  const [transpose, setTranspose] = useState(0);

  const handleTranspose = (value) => {
    if (value === -1) {
      setTranspose((prev) => prev - 1);
    } else if (value === 1) {
      setTranspose((prev) => prev + 1);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8081/Lyrics/GetSong/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Id: Number(params.id),
          Transpose: transpose,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch song data");
      }
      const data = await response.json();
      console.log(data);
      setSong(data);
    } catch (error) {
      console.error("Error fetching song data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [transpose]);

  return (
    <>
      <div>
        <h2>{song.title}</h2>
        <p>Artist: {song.artist}</p>
        <p>Tuning: {song.tuning}</p>
        <p>Key: {song.song_key}</p>
        <p>Capo: {song.capo_position}</p>
        {/* <p>Author: {song.author}</p> */}
        <p>Published: {song.created_on}</p>
        <div>{parse(song.lyrics)}</div>
      </div>
      <div className=" transpose-section">
        <h5 className="transpose-heading">Transpose </h5>
        {transpose === 0 ? (
          <p className="transpose-value"></p>
        ) : (
          <p className="transpose-value">{transpose}</p>
        )}
        <div className="transpose-buttons">
          <button
            className="transpose-button"
            onClick={() => handleTranspose(-1)}
          >
            <h5>-1</h5>
          </button>
          <button
            className="transpose-button"
            onClick={() => handleTranspose(1)}
          >
            <h5>+1</h5>
          </button>
        </div>
      </div>
    </>
  );
};

export default Lyrics;
