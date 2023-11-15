import PropTypes from "prop-types";
import "../style/App.scss";

function CardSingle({
  singleName,
  imgCoverSingle,
  idSingle,
  trackSinglePreview,
}) {
  return (
    <li className="card cardSingle" key={idSingle}>
      <img className="img-fluid" src={imgCoverSingle} alt="cover" />
      {trackSinglePreview?.length && (
        <div className="audio-rond">
          <audio controls src={trackSinglePreview}>
            <track kind="captions" />
          </audio>
        </div>
      )}
      <h2>{singleName}</h2>
    </li>
  );
}

CardSingle.propTypes = {
  singleName: PropTypes.string.isRequired,
  imgCoverSingle: PropTypes.string.isRequired,
  idSingle: PropTypes.string.isRequired,
  trackSinglePreview: PropTypes.string.isRequired,
};

export default CardSingle;
