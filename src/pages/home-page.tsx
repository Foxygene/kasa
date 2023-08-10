import Banner from "../components/banner";
import Card from "../components/card";
import Header from "../components/header";
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
