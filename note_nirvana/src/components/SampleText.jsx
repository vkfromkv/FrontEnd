import axios from "axios";
import React, { useEffect, useState } from "react";
//As you are working on the file, You can choose to ignore this file.
function SampleText() {
  const sampleTexts = [
    "Hey There! Welcome to Note Nirvana!",
    "Hello, You must be a Musician",
    "Hi, What brings you to Note Nirvana Today?",
    "Hola! Ready to play your fav song?",
  ];

  const [text, setText] = useState(sampleTexts[0]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleButtonClick = () => {
    setText(sampleTexts[getRandomInt(sampleTexts.length)]);
  };

  const [auth, setAuth] = useState(false);
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
          navigate("/login");
        } else {
          setAuth(false);
          setMsg(res.data.Error);
        }
      })
      .catch((err) => {err});
  }, []);

  function handleDeleteToken() {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        location.reload(true);
      })
      .then((err) => console.log(err));
  }

  return (
    <>
      <div className="container text-center my-5">
        <button
          type="button"
          className="btn btn-primary my-5"
          onClick={() => handleButtonClick()}
        >
          Click Here
        </button>
        <br />
        {auth ? (
          <div>
            <h3>You are Authorized {name}</h3>
            <h1>{text}</h1>
            <button className="btn btn-danger" onClick={handleDeleteToken}>
              Logout
            </button>
          </div>
        ) : (
          <h1>{text}</h1>
        )}
      </div>
    </>
  );
}

export default SampleText;
