import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stars from "../components/Stars";
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
        <div>
          <div className="logement-info">
            <h1>{prop.data.title}</h1>
            <p>{prop.data.location}</p>
            <ul className="tag-container">
              {prop.data.tags.map((tag) => (
                <li className="tag">{tag}</li>
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
      </main>
      <Footer />
    </>
  );
}

export default Logement;
