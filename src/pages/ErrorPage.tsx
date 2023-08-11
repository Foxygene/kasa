import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import "./errorPage.css";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <main>
        <Header />
        <div className="error">
          <p className="number">{error.status}</p>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <a href="/">Retourner sur la page d'acceuil</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
