import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stars from "../components/Stars";
import { logement } from "../types/logement";
import "./logementPage.css";

function Logement(prop: logement) {
  const pictures = prop.data.pictures;

  return (
    <>
      <main>
        <Header />
        <Carrousel pictures={pictures} />
        <div className="infos">
          <div className="logement-info">
            <h1>{prop.data.title}</h1>
            <p>{prop.data.location}</p>
            <ul className="tag-container">
              {prop.data.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="host-info">
            <div>
              <Stars rating={prop.data.rating} />
            </div>
            <div className="host-profile">
              <p>{prop.data.host.name}</p>
              <img src={prop.data.host.picture} />
            </div>
          </div>
        </div>
        <div className="logement-dropdown">
          <Dropdown nom="Description" content={prop.data.description} />
          <Dropdown nom="Équipements" content={prop.data.equipments} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Logement;
