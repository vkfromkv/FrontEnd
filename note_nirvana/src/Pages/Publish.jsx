import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
const Publish = () => {
  const data = useLoaderData();
  return (
    <>
      <div>
        <Form method="POST">
          <div className="row mb-3">
            <div className="col-3">
              <label className="mb-2">Artist</label>
              <input
                type="text"
                name="Artist"
                className="form-control"
                placeholder="Artist"
              />
            </div>
            <div className="col-3">
              <label className="mb-2">Song</label>
              <input
                type="text"
                name="Song"
                className="form-control"
                placeholder="Song"
              />
            </div>
            <div className="form-group col-3 md-4">
              <label className="mb-2">Genre</label>
              <select name="Genre" class="form-control">
                <option selected>Choose...</option>
                {data.genres.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="form-group col-3 md-4">
              <label className="mb-2">Tuning</label>
              <select name="Tuning" className="form-control">
                <option selected>Choose...</option>
                {data.TuningList.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-3 md-4">
              <label className="mb-2">Capo</label>
              <select name="Capo" className="form-control">
                <option selected>Choose...</option>
                {data.capoList.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-3 md-4">
              <label className="mb-2 ">Key</label>
              <select name="Key" className="form-control">
                <option selected>Choose...</option>
                {data.songKeys.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-3 md-4">
              <label className="mb-2">Time Signature</label>
              <select name="TimeSignature" class="form-control">
                <option selected>Choose...</option>
                {data.timeSignatures.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="mb-2">
            <textarea
              class="form-control w-75"
              id="exampleFormControlTextarea1"
              rows="15"
              placeholder="Enter your Tab Text"
              name="Tabtext"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
};
export default Publish;

export async function action({ request, params }) {
  const data = await request.formData();
  const lines = data.get("Tabtext");
  const line = lines.split("\n");

  const formData = {
    artist: data.get("Artist"),
    title: data.get("Song"),
    tuning: data.get("Tuning"),
    lyrics: line,
    capo: data.get("Capo"),
    key: data.get("Key"),
    genre: data.get("Genre"),
    timeSignature: data.get("TimeSignature"),
  };

  const response = await fetch("http://localhost:8081/Lyrics/Save", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
export async function loader() {
  const response = await fetch(
    "http://localhost:8081/Lyrics/GetDropDownDataForPublication"
  );
  const resData = response.json();

  return resData;
}
