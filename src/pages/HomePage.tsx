import Banner from "../components/Banner";
import Card from "../components/Card";
import Header from "../components/Header";
import logements from "../assets/logements.json";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <div className="list">
        {logements.map((logement) => (
          <Card key={logement.id} data={logement} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
