import Banner from "../components/Banner";
import bannerimg from "../assets/bannerimg.jpg";
import Card from "../components/Card";
import Header from "../components/Header";
import logements from "../assets/logements.json";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <main>
        <Header />
        <Banner
          content="Chez vous,"
          contentPostBr=" partout et ailleurs"
          img={bannerimg}
        />
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
