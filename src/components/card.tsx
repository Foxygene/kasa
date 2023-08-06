import "./card.css";
import logements from "../assets/logements.json";

const logement = logements[0];

function Card() {
  console.log(logement);

  return (
    <div className="card" style={{ backgroundImage: `url(${logement.cover})` }}>
      <a>{logement.title}</a>
    </div>
  );
}

export default Card;
