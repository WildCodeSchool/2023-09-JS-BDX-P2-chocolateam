import PropTypes from "prop-types";

function Tracks({ nameTrack }) {
  return (
    <div>
      <h2>{nameTrack}</h2>
    </div>
  );
}
Tracks.propTypes = {
  nameTrack: PropTypes.string.isRequired,
};

export default Tracks;
