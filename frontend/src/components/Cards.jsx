import PropTypes from "prop-types";

function Cards({ playlistName, imgCover, playlistCategory }) {
  return (
    <div className="card">
      <img className="img-fluid" src={imgCover} alt="cover" />
      <h1>{playlistName}</h1>
      <p>{playlistCategory}</p>
    </div>
  );
}

Cards.propTypes = {
  playlistName: PropTypes.string.isRequired,
  imgCover: PropTypes.string.isRequired,
  playlistCategory: PropTypes.string.isRequired,
};

export default Cards;
