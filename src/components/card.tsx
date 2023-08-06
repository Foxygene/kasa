import "./card.css";

type Props = {
  data: { cover: string; title: string };
};

function Card(props: Props) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${props.data.cover})` }}
    >
      <a>{props.data.title}</a>
    </div>
  );
}

export default Card;
