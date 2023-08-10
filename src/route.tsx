import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home-page";
import ErrorPage from "./pages/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);
