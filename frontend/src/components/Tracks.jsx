import PropTypes from "prop-types";

function Tracks({ nameTrack, imgCoverTrack }) {
  return (
    <div>
      <h2>{nameTrack}</h2>
      <img className="img-fluid" src={imgCoverTrack} alt="img" />
    </div>
  );
}
Tracks.propTypes = {
  nameTrack: PropTypes.string.isRequired,
  imgCoverTrack: PropTypes.string.isRequired,
};

export default Tracks;
