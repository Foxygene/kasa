import Header from "../components/Header";
import "./aboutPage.css";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Banner from "../components/Banner";
import aboutbanner from "../assets/aboutbanner.jpg";

export default function AboutPage() {
  return (
    <>
      <main>
        <Header />
        <Banner content="" contentPostBr="" img={aboutbanner} />
        <div className="dropdowns-container">
          <Dropdown
            nom="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <Dropdown
            nom="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Dropdown
            nom="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Dropdown
            nom="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
