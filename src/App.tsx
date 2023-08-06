import "./App.css";
import Banner from "./components/banner";
import Card from "./components/card";
import Header from "./components/header";
import logements from "./assets/logements.json";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Card data={logements[0]}></Card>
    </>
  );
}

export default App;
