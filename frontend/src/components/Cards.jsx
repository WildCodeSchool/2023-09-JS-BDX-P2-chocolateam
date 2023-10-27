import PropTypes from "prop-types";

function Cards({
  playlistName,
  imgCover,
  playlistCategory,
  playlistId,
  infoTrack,
}) {
  return (
    <div className="card">
      <img className="img-fluid" src={imgCover} alt="cover" />
      <h1>{playlistName}</h1>
      <p>{playlistCategory}</p>
      <p>{playlistId}</p>
      <img src={infoTrack} alt="cover" />
    </div>
  );
}

Cards.propTypes = {
  playlistName: PropTypes.string.isRequired,
  imgCover: PropTypes.string.isRequired,
  playlistCategory: PropTypes.string.isRequired,
  playlistId: PropTypes.string.isRequired,
  infoTrack: PropTypes.string.isRequired,
};

export default Cards;
