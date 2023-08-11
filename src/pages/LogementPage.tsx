import Header from "../components/Header";
import { logement } from "../types/logement";
import "./logement.css";

function Logement(prop: logement) {
  console.log(prop);
  return (
    <>
      <main>
        <Header />
        <p>oui</p>
      </main>
    </>
  );
}

export default Logement;
