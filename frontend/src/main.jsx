import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import TemplateHome from "./pages/TemplateHome";
import TemplatePlaylist from "./pages/TemplatePlaylist";
import TemplateTracklist from "./pages/TemplateTracklist";
import sortCollection from "./tools/sortCollection";
import requestSpotify from "./spotify";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <TemplateHome /> },
      {
        path: "/playlist/:nomDuGenre",
        element: <TemplatePlaylist />,
        loader: async ({ params }) => {
          const [response, reponseSingle] = await Promise.all([
            requestSpotify(
              `https://api.spotify.com/v1/search?q=${params.nomDuGenre}&type=playlist`
            ),
            requestSpotify(
              `https://api.spotify.com/v1/search?q=${params.nomDuGenre}&type=track`
            ),
          ]);
          return {
            playlists: sortCollection(response.data.playlists.items),
            singleList: sortCollection(reponseSingle.data.tracks.items),
          };
        },
      },
      {
        path: "/tracklist/:idPlaylist",
        element: <TemplateTracklist />,
        loader: async ({ params }) => {
          const reponse = await requestSpotify(
            `https://api.spotify.com/v1/playlists/${params.idPlaylist}/tracks`
          );

          return { tracklists: sortCollection(reponse.data.items) };
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
