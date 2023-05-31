import * as React from "react";
import { Link } from "react-router-dom";

const Back: React.FC<{ path: string }> = ({ path }) => {
  return (
    <Link to={`${path}`}>
      <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        height="3em"
        width="3em"
        style={{
          position: "absolute",
          right: "10px",
          top: "5px",
          color: "red",
        }}
      >
        <path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm212.65-91.36a16 16 0 01.09 22.63L208.42 240H342a16 16 0 010 32H208.42l52.32 52.73A16 16 0 11238 347.27l-79.39-80a16 16 0 010-22.54l79.39-80a16 16 0 0122.65-.09z" />
      </svg>
    </Link>
  );
};

export default Back;