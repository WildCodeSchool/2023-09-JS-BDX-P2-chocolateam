import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import App from "./App";
import TemplateHome from "./pages/TemplateHome";
import TemplatePlaylist from "./pages/TemplatePlaylist";
import TemplateTracklist from "./pages/TemplateTracklist";
import { getToken } from "./spotify";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <TemplateHome /> },
      {
        path: "/playlist/:nomDuGenre",
        element: <TemplatePlaylist />,
        loader: async ({ params }) => {
          const token = await getToken();
          const [response, reponseSingle] = await Promise.all([
            axios.get(
              `https://api.spotify.com/v1/search?q=${params.nomDuGenre}&type=playlist`,
              { headers: { Authorization: `Bearer ${token}` } }
            ),
            axios.get(
              `https://api.spotify.com/v1/search?q=${params.nomDuGenre}&type=track`,
              { headers: { Authorization: `Bearer ${token}` } }
            ),
          ]);

          const tracks = reponseSingle.data.tracks.items;

          const myList = [];
          for (let i = 0; i < 15; i += 1) {
            const randomIndice = Math.floor(Math.random() * tracks.length);
            const randomTrack = tracks[randomIndice];
            myList.push(randomTrack);
          }
          return {
            playlists: response.data.playlists.items,
            singleList: myList,
          };
        },
      },
      { path: "/tracklist/:idPlaylist", element: <TemplateTracklist /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
