import axios from "axios";
import { useState } from "react";
import Cards from "./components/Cards";
import "./style/App.scss";
import Moods from "./models/Moods";
import { getToken } from "./spotify";

function App() {
  const [playlists, setPlaylists] = useState([]);

<<<<<<< HEAD
  // Fonction pour effectuer la première requête
  const getFirstPlaylist = async () => {
    const token =
      "BQC8WIDZFiK04LhL88V_cxRb3-cCRtjq3cXBbBymyGxLMcdH3Hw6coc92H4pRP0xIJFJqs-aS2i_rwgOn3TIHZLE2AwLge-lAlCRMiJ26KAD99lJpZA"; // Remplacez par votre token Spotify

    const response = await axios.get(
      "https://api.spotify.com/v1/search?q=chill&type=playlist",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(response.data.playlists.items);
  };

  // Fonction pour effectuer la deuxième requête
  const getSecondPlaylist = async () => {
    const token =
      "BQC8WIDZFiK04LhL88V_cxRb3-cCRtjq3cXBbBymyGxLMcdH3Hw6coc92H4pRP0xIJFJqs-aS2i_rwgOn3TIHZLE2AwLge-lAlCRMiJ26KAD99lJpZA"; // Remplacez par votre token Spotify

    const response = await axios.get(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFKLfwjuJMoNC/playlists",
=======
  const getPlaylist = async () => {
    const token = await getToken();
    const reponse = await axios.get(
      `https://api.spotify.com/v1/browse/categories/${Moods.Chill}/playlists`,

>>>>>>> 150a5dd3b00bc8dcc4b5db5943109b77f5f9c581
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(response.data.playlists.items);
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
<<<<<<< HEAD
        <button
          className="btn-generation"
          type="button"
          onClick={getFirstPlaylist}
        >
          Obtenir la première playlist
        </button>

        <button
          className="btn-generation"
          type="button"
          onClick={getSecondPlaylist}
        >
          Obtenir la deuxième playlist
        </button>
=======
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
>>>>>>> 150a5dd3b00bc8dcc4b5db5943109b77f5f9c581
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
