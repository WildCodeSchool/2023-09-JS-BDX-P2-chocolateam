import PropTypes from "prop-types";

function Cards({ playlistName, imgCover }) {
  return (
    <div>
      <h1>{playlistName}</h1>
      <img src={imgCover} alt="cover" />
    </div>
  );
}

Cards.propTypes = {
  playlistName: PropTypes.string.isRequired,
  imgCover: PropTypes.string.isRequired,
};

export default Cards;
