import "./banner.css";

function Banner(props: {
  content: string;
  contentPostBr: string;
  img: string;
}) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${props.img})` }}>
      <a>
        {props.content}
        <br></br>
        {props.contentPostBr}
      </a>
    </div>
  );
}

export default Banner;
