import { useLoaderData } from "react-router-dom";
import CardPlaylist from "../components/CardPlaylist";
import CardSingle from "../components/CardSingle";

function TemplatePlaylist() {
  const { playlists, singleList } = useLoaderData();

  return (
    <div>
      <div className="general-title">
        <h2>Une sélection aux petits oignons</h2>
        <button type="button">Bouton</button>
      </div>
      <div className="title-results-playlist">
        <h2>Les playlists</h2>
      </div>
      <div className="resultat-playlist">
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
      </div>
      <div className="title-results-singlelist">
        <h2 className="title-results-single">Quelques morceaux</h2>
      </div>
      <div className="resultat-singlelist">
        <ul className="horizontal-list">
          {singleList.map((element) => {
            return (
              <CardSingle
                key={element.id}
                singleName={element.name}
                imgCoverSingle={element.album.images[0].url}
                trackSinglePreview={element.preview_url}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default TemplatePlaylist;
