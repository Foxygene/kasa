import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import logements from "./assets/logements.json";
import Logement from "./pages/LogementPage";

const logementPages = logements.map((logement) => ({
  path: `/logement/${logement.id}`,
  element: <Logement data={logement} />,
  errorElement: <ErrorPage />,
}));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  ...logementPages,
]);
