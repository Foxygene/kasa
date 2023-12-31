import { useRef, useState } from "react";
import "./dropdown.css";

function Dropdown(props: { nom: string; content: string | string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownContentRef = useRef<HTMLDivElement>(null);

  const maxContentHeight =
    dropdownContentRef.current?.scrollHeight ?? "9999rem";

  let content = <p>{props.content}</p>;
  if (Array.isArray(props.content))
    content = (
      <ul>
        {props.content.map((equipement, i) => (
          <li key={i}>{equipement}</li>
        ))}
      </ul>
    );

  return (
    <div className="dropdown">
      <div
        onClick={() => setIsOpen((oldValue) => !oldValue)}
        className="dropdown-top"
      >
        {props.nom}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <g clipPath="url(#clip0_193990_77)">
            <path
              d="M8.91332 5.64983C9.29864 5.26451 9.9244 5.26451 10.3097 5.64983L16.2282 11.5683C16.6135 11.9536 16.6135 12.5794 16.2282 12.9647C15.8429 13.35 15.2171 13.35 14.8318 12.9647L9.60998 7.74288L4.38814 12.9616C4.00282 13.347 3.37707 13.347 2.99175 12.9616C2.60643 12.5763 2.60643 11.9506 2.99175 11.5652L8.91024 5.64675L8.91332 5.64983Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_193990_77">
              <rect
                width="18.4192"
                height="18.4193"
                fill="white"
                transform="translate(18.8196 0.755981) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        ref={dropdownContentRef}
        style={{
          maxHeight: isOpen ? maxContentHeight : "0px",
        }}
        className="dropdown-content"
      >
        {content}
      </div>
    </div>
  );
}

export default Dropdown;
