import React from "react";

function ShowPassword(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        onChange={(event) => {
          props.setVisible(event.target.checked);
        }}
      ></input>
      <label className="form-check-label pb-2">Show password</label>
    </div>
  );
}
export default ShowPassword;
