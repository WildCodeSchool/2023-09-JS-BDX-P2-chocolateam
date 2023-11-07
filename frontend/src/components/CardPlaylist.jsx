import PropTypes from "prop-types";
import "../style/App.scss";
import { Link } from "react-router-dom";

function CardPlaylist({ playlistName, imgCover, idPlaylist }) {
  return (
    <li className="card">
      <Link to={`/tracklist/${idPlaylist}`} key={idPlaylist}>
        <img className="img-fluid" src={imgCover} alt="cover" />
        <h1>{playlistName}</h1>
      </Link>
    </li>
  );
}

CardPlaylist.propTypes = {
  playlistName: PropTypes.string.isRequired,
  imgCover: PropTypes.string.isRequired,
  idPlaylist: PropTypes.string.isRequired,
};

export default CardPlaylist;
