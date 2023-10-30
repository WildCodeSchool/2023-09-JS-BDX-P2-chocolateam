import React from "react";

function Questions() {
  return (
    <div className="mood-playlist">
      <h2>Les playlists</h2>
      <select className="select-container" name="moods">
        <option value="Empty"> </option>
        <option value="Chill">Chill</option>
        <option value="Summer">Summer</option>
        <option value="Party">Party</option>
        <option value="Sad">Sad</option>
      </select>
    </div>
  );
}
export default Questions;
