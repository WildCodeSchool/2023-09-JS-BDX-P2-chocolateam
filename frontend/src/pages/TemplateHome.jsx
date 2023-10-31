import axios from "axios";
import { useState } from "react";
import Cards from "../components/Cards";
import "../style/App.scss";
import Moods from "../models/Moods";
import { getToken } from "../spotify";

function TemplateHome() {
  const [playlists, setPlaylists] = useState([]);

  const getPlaylistChill = async () => {
    const token = await getToken();
    const reponse = await axios.get(
      `https://api.spotify.com/v1/browse/categories/${Moods.Chill}/playlists`,

      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(reponse.data.playlists.items);
  };

  return (
    <div className="container">
      <div className="mood-playlist">
        <button type="button" onClick={getPlaylistChill}>
          button
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
              idPlaylist={element.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TemplateHome;
