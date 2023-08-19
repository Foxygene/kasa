import Carrousel from "../components/Carrousel";
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
    </>
  );
}

export default Logement;
