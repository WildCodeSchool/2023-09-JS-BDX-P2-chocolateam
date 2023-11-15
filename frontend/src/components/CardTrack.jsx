import PropTypes from "prop-types";
import "../style/App.scss";

function CardTrack({
  trackArtistName,
  trackImgCover,
  trackId,
  trackName,
  trackPreview,
}) {
  return (
    <div className="card" key={trackId}>
      <img
        className="img-fluid"
        src={trackImgCover}
        alt="cover"
        loading="lazy"
      />
      <h1>{trackArtistName}</h1>
      <h2>{trackName}</h2>
      {trackPreview?.length && (
        <audio controls src={trackPreview}>
          <track kind="captions" />
        </audio>
      )}
    </div>
  );
}

CardTrack.propTypes = {
  trackImgCover: PropTypes.string.isRequired,
  trackArtistName: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  trackPreview: PropTypes.string.isRequired,
};

export default CardTrack;
