import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardPlaylist from "../components/CardPlaylist";
import { getToken } from "../spotify";
import CardSingle from "../components/CardSingle";

function TemplatePlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const [singleList, setSingleList] = useState([]);
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

  const getSingleList = async () => {
    const token = await getToken();
    const reponseSingle = await axios.get(
      `https://api.spotify.com/v1/search?q=${nomDuGenre}&type=track&limit=15`,

      { headers: { Authorization: `Bearer ${token}` } }
    );
    setSingleList(reponseSingle.data.tracks.items);
  };

  useEffect(() => {
    getSingleList();
  }, []);
  return (
    <div>
      <ul className="horizontal-list">
        {playlists.map((element) => {
          return (
            <CardPlaylist
              playlistName={element.name}
              imgCover={element.images[0].url}
              key={element.id}
              idPlaylist={element.id}
            />
          );
        })}
      </ul>
      <ul className="horizontal-list">
        {singleList.map((element) => {
          return (
            <CardSingle
              key={element.id}
              singleName={element.name}
              imgCoverSingle={element.album.images[0].url}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default TemplatePlaylist;
