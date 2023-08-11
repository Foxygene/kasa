import Banner from "../components/Banner";
import Card from "../components/Card";
import Header from "../components/Header";
import logements from "../assets/logements.json";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <main>
        <Header />
        <Banner />
        <div className="list">
          {logements.map((logement) => (
            <Card key={logement.id} data={logement} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
