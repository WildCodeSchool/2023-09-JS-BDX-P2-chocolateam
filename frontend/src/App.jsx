import axios from "axios";
import { useState } from "react";
import Cards from "./components/Cards";
import "./style/App.scss";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const getPlaylist = async () => {
    const token =
      "BQCSe5gAhm54RgI7FXlopTEv-mjF4gRN1nnYJDJMUQ17Kw7uKXwr-c2aM6_lFaaLaPRYCmA4aCoQUuYi0XgCRNj3yqST0MMiif1s28qdha-qlTbh-8M";

    const reponse = await axios.get(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFKLfwjuJMoNC/playlists",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(reponse.data.playlists.items);
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button className="btn-generation" type="button" onClick={getPlaylist}>
          Générer des playlists !
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
