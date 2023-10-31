import PropTypes from "prop-types";

function CardPlaylist({
  playlistName,
  imgCover,
  playlistCategory,
  idPlaylist,
}) {
  return (
    <div className="card" key={idPlaylist}>
      <img className="img-fluid" src={imgCover} alt="cover" />
      <h1>{playlistName}</h1>
      <p>{playlistCategory}</p>
      {/* <button className="btn-generation" type="button" onClick={getTrackList}>
        La tracklist
      </button> */}
    </div>
  );
}

CardPlaylist.propTypes = {
  playlistName: PropTypes.string.isRequired,
  imgCover: PropTypes.string.isRequired,
  playlistCategory: PropTypes.string.isRequired,
  idPlaylist: PropTypes.string.isRequired,
};

export default CardPlaylist;
