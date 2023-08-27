import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { logement } from "../types/logement";
import "./logementPage.css";

function Logement(prop: logement) {
  console.log(prop);
  const pictures = prop.data.pictures;

  return (
    <>
      <main>
        <Header />
        <Carrousel pictures={pictures} />
      </main>
      <Footer />
    </>
  );
}

export default Logement;
