import PropTypes from "prop-types";
import "../style/App.scss";

function CardSingle({
  singleName,
  imgCoverSingle,
  idSingle,
  trackSinglePreview,
}) {
  return (
    <li className="card" key={idSingle}>
      <img className="img-fluid" src={imgCoverSingle} alt="cover" />
      <h1>{singleName}</h1>
      {trackSinglePreview && (
        <audio controls src={trackSinglePreview}>
          <track kind="captions" />
        </audio>
      )}
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
