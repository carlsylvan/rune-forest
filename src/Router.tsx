import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { RuneList } from "./components/runelist/RuneList";
import { Runestone } from "./components/runestone/Runestone";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <RuneList />,
        },
        {
          path: "/runes",
          element: <RuneList />,
        },
        {
          path: "/rune/:id",
          element: <Runestone />,
        },
      ],
    },
  ]);