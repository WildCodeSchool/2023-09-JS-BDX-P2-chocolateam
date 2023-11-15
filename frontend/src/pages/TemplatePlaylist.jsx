import { useLoaderData } from "react-router-dom";
import CardPlaylist from "../components/CardPlaylist";
import CardSingle from "../components/CardSingle";
import NavBis from "../components/NavBis";
import MoodButtons from "../components/MoodButtons";

function TemplatePlaylist() {
  const { playlists, singleList } = useLoaderData();

  return (
    <div>
      <NavBis />

      <div>
        <MoodButtons />
      </div>
      <div className="title-results-playlist">
        <h2>Les playlists</h2>
      </div>
      <div className="resultat-playlist">
        <ul className="horizontal-list">
          {playlists.map((element) => (
            <CardPlaylist
              playlistName={element.name}
              imgCover={element.images[0].url}
              key={element.id}
              idPlaylist={element.id}
            />
          ))}
        </ul>
      </div>
      <div className="title-results-singlelist">
        <h2 className="title-results-single">Quelques morceaux</h2>
      </div>
      <div className="resultat-singlelist">
        <ul className="horizontal-list">
          {singleList.map((element) => (
            <CardSingle
              key={element.id}
              idSingle={element.id}
              singleName={element.name}
              imgCoverSingle={element.album.images[0].url}
              trackSinglePreview={element.preview_url ?? "Super musique"}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TemplatePlaylist;
