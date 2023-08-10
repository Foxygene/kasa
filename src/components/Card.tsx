import { Link } from "react-router-dom";
import "./card.css";

type Props = {
  data: { id: string; cover: string; title: string };
};

function Card(props: Props) {
  return (
    <Link to={`/logement/${props.data.id}`}>
      <div
        className="card"
        style={{ backgroundImage: `url(${props.data.cover})` }}
      >
        {props.data.title}
      </div>
    </Link>
  );
}

export default Card;
