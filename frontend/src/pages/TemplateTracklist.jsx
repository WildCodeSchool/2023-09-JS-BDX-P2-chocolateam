import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardTrack from "../components/CardTrack";
import { getToken } from "../spotify";

function TemplateTracklist() {
  const [tracklists, setTracklists] = useState([]);
  const { idPlaylist } = useParams();

  const getTrackList = async () => {
    const token = await getToken();
    const reponse = await axios.get(
      `https://api.spotify.com/v1/playlists/${idPlaylist}/tracks`,

      { headers: { Authorization: `Bearer ${token}` } }
    );

    setTracklists(reponse.data.items);
  };

  useEffect(() => {
    getTrackList();
  }, []);

  return (
    <div>
      {tracklists.map((element) => {
        return (
          <CardTrack
            trackArtistName={element.track.artists[0].name}
            trackName={element.track.name}

            // imgCover={element.images[0].url}
            // playlistCategory={element.description}
            // key={element.id}
            // idPlaylist={element.id}
          />
        );
      })}
    </div>
  );
}

export default TemplateTracklist;
