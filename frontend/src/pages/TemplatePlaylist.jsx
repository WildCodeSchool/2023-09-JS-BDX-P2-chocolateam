import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardPlaylist from "../components/CardPlaylist";
import { getToken } from "../spotify";

function TemplatePlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const { nomDuGenre } = useParams();

  const getPlaylist = async () => {
    const token = await getToken();
    const reponse = await axios.get(
      `https://api.spotify.com/v1/search?q=${nomDuGenre}&type=playlist`,

      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(reponse.data.playlists.items);
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  return (
    <ul className="horizontal-list">
      {playlists.map((element) => {
        return (
          <CardPlaylist
            playlistName={element.name}
            imgCover={element.images[0].url}
            playlistCategory={element.description}
            key={element.id}
            idPlaylist={element.id}
          />
        );
      })}
    </ul>

    // <h2> Affichages de toutes les playlists Chill</h2>
    // <CardPlaylist
    //   {element.name}
    //   {element.images[0].url}
    //   {element.description}
    //   key={element.id}
    //   idPlaylist={element.id}
    // />
  );
}

export default TemplatePlaylist;
