import axios from "axios";
import { useState } from "react";
import Cards from "./components/Cards";
import "./style/App.scss";
import Moods from "./models/Moods";
import { getToken } from "./spotify";

function App() {
  const [playlists, setPlaylists] = useState([]);

  const getPlaylist = async () => {
    const token = await getToken();
    const reponse = await axios.get(
      `https://api.spotify.com/v1/browse/categories/${Moods.Chill}/playlists`,

      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(reponse.data.playlists.items);
  };
  return (
    <div className="container">
      <div className="searchBar">
        <form action="" className="searchArtist">
          <input
            className="search-field"
            type="text"
            value="Cherche un artiste"
          />
          <input className="search-button" type="button" value="🔍" />
        </form>
      </div>
      <div className="proposition-card">
        <h1>Une sélection aux petits oignon !</h1>
        <button type="button">Les nouveautés</button>
      </div>
      <div className="btn-container">
        {/* <button className="btn-generation" type="button" onClick={getPlaylist}>
          Playlist Happy !
        </button> */}

        <div className="mood-playlist">
          <h2>Les playlists</h2>
          <select
            className="select-container"
            onChange={getPlaylist}
            name="moods"
          >
            <option type="button" value="">
              Choisir son Mood
            </option>
            <option value="chill">Chill</option>
            <option value="cat">Cat</option>
          </select>
        </div>
      </div>

      <div>
        {playlists.map((element) => {
          return (
            <Cards
              playlistName={element.name}
              imgCover={element.images[0].url}
              playlistCategory={element.description}
              key={element.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
