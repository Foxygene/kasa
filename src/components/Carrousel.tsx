import "./carrousel.css";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import { useState } from "react";

function Carrousel(props: { pictures: string[] }) {
  const [slide, setSlide] = useState(0);

  function handleClickRight() {
    if (slide + 1 === props.pictures.length) return;

    setSlide(slide + 1);
  }

  function handleClickLeft() {
    if (slide - 1 === -1) return;
    setSlide(slide - 1);
  }

  return (
    <div className="carousel">
      <div
        className="track-container"
        style={{ backgroundImage: `url(${props.pictures[slide]})` }}
      ></div>
      <button onClick={handleClickLeft} className="carousel-button button-left">
        <img src={left} />
      </button>
      <button
        onClick={handleClickRight}
        className="carousel-button button-right"
      >
        <img src={right} />
      </button>
    </div>
  );
}

export default Carrousel;
