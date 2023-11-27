import React from "react";

function ShowPassword(props) {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        onChange={(event) => {
          props.setVisible(event.target.checked);
        }}
      ></input>
      <label class="form-check-label pb-2">Show password</label>
    </div>
  );
}
export default ShowPassword;
