import axios from "axios";
import { useState } from "react";
import Cards from "./components/Cards";
import "./style/App.scss";
import Moods from "./models/Moods";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const token =
    "BQDt9d4OkBmJov8MO2eH3rR5JrdVYaimi3EsSsGCM9f3-CnCv0NqxmjQccbR_vHfP0xNuUpBlKn_0ICn7NL8V0HZYrj6Bd4SQg9oNpZ2y9My0FD1eWM";

  const getPlaylist = async () => {
    const reponse = await axios.get(
      `https://api.spotify.com/v1/browse/categories/${Moods.Chill}/playlists`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(reponse.data.playlists.items);
  };

  const getTrackList = async () => {
    const reponseTrack = await axios.get(
      `https://api.spotify.com/v1/playlists/37i9dQZF1DX7aUUBCKwo4Y/tracks`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setTracks(reponseTrack.data.items);
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button className="btn-generation" type="button" onClick={getPlaylist}>
          Playlist Happy !
        </button>
        <button className="btn-generation" type="button" onClick={getTrackList}>
          La tracklist
        </button>
      </div>

      <div>
        {playlists.map((element) => {
          return (
            <Cards
              playlistName={element.name}
              imgCover={element.images[0].url}
              playlistCategory={element.description}
              key={element.id}
              playlistId={element.id}
            />
          );
        })}
      </div>

      <div>
        {tracks.map((track) => {
          return <Cards infoTrack={track.track.album.images[1].url} />;
        })}
      </div>
    </div>
  );
}

export default App;
