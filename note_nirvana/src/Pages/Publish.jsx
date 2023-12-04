import React from "react";
import { Form, redirect } from "react-router-dom";
const Publish = () => {
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
          </div>

          <div className="row mb-3">
            <div className="form-group col-3 md-4">
              <label className="mb-2">Tuning</label>
              <select name="Tuning" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-3 md-4">
              <label className="mb-2">Capo</label>
              <select name="Capo" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-3 md-4">
              <label className="mb-2 ">Key</label>
              <select name="Key" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="mb-2">
            <textarea
              className="form-control w-75"
              id="exampleFormControlTextarea1"
              rows="20"
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
  const formData = {
    artist: data.get("Artist"),
    song: data.get("Song"),
    tuning: data.get("Tuning"),
    Tabtext: data.get("Tabtext"),
  };
  console.log(formData);
  return redirect("/publish");
}
