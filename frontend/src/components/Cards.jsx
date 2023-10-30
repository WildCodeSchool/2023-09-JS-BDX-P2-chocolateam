import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import Tracks from "./Tracks";
import { getToken } from "../spotify";

function Cards({ playlistName, imgCover, playlistCategory, idPlaylist }) {
  const [tracks, setTracks] = useState([]);

  const getTrackList = async () => {
    const token = await getToken();
    const reponseTrack = await axios.get(
      `https://api.spotify.com/v1/playlists/${idPlaylist}/tracks`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTracks(reponseTrack.data.items);
  };

  return (
    <div className="card">
      <img className="img-fluid" src={imgCover} alt="cover" />
      <h1>{playlistName}</h1>
      <p>{playlistCategory}</p>
      <button className="btn-generation" type="button" onClick={getTrackList}>
        La tracklist
      </button>

      {tracks.map((track) => {
        return (
          <Tracks
            nameTrack={track.track.name}
            imgCoverTrack={track.track.album.images[0].url}
          />
        );
      })}
    </div>
  );
}

Cards.propTypes = {
  playlistName: PropTypes.string.isRequired,
  imgCover: PropTypes.string.isRequired,
  playlistCategory: PropTypes.string.isRequired,
  idPlaylist: PropTypes.string.isRequired,
};

export default Cards;
