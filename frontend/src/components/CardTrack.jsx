import PropTypes from "prop-types";
import "../style/App.scss";

function CardTrack({ trackArtistName, trackImgCover, idTracklist }) {
  return (
    <div className="card" key={idTracklist}>
      <img className="img-fluid" src={trackImgCover} alt="cover" />
      <h1>{trackArtistName}</h1>
      {/* <button className="btn-generation" type="button" onClick={getTrackList}>
        La tracklist
      </button> */}
    </div>
  );
}

CardTrack.propTypes = {
  trackImgCover: PropTypes.string.isRequired,
  trackArtistName: PropTypes.string.isRequired,
  idTracklist: PropTypes.string.isRequired,
};

export default CardTrack;
