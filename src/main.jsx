import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Homepage from "./routes/homepage/Homepage.jsx";
import GamePage from "./routes/gamepage/GamePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
