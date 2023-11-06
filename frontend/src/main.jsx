import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import TemplateHome from "./pages/TemplateHome";
import TemplatePlaylist from "./pages/TemplatePlaylist";
import TemplateTracklist from "./pages/TemplateTracklist";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <TemplateHome /> },
      { path: "/playlist/:nomDuGenre", element: <TemplatePlaylist /> },
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
