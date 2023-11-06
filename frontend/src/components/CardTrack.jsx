import PropTypes from "prop-types";
import "../style/App.scss";

function CardTrack({ trackName, trackImgCover, idTracklist }) {
  return (
    <div className="card" key={idTracklist}>
      <img className="img-fluid" src={trackImgCover} alt="cover" />
      <h1>{trackName}</h1>
      {/* <button className="btn-generation" type="button" onClick={getTrackList}>
        La tracklist
      </button> */}
    </div>
  );
}

CardTrack.propTypes = {
  trackImgCover: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  idTracklist: PropTypes.string.isRequired,
};

export default CardTrack;
