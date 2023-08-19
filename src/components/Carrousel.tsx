import "./carrousel.css";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

function Carrousel(props: { pictures: string[] }) {
  return (
    <div className="carousel">
      <div className="track-container">
        <ul className="track">
          {props.pictures.map((picture, i) => (
            <li
              style={{ left: `${1240 * i}px` }}
              key={picture}
              className="slide"
            >
              <img src={picture} />
            </li>
          ))}
        </ul>
      </div>
      <button className="carousel-button button-left">
        <img src={left} />
      </button>
      <button className="carousel-button button-right">
        <img src={right} />
      </button>
    </div>
  );
}

export default Carrousel;
