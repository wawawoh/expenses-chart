import { useEffect, useRef } from "react";

function ListObject({ day, amount }) {
  const showing = useRef();

  const createGraph = () => {
    const height = amount * 2;
    return <p style={{ height: `${height}px` }}></p>;
  };

  const handleMouseHover = () => {
    showing.current.style.display = "block";
  };
  const handleMouseLeft = () => {
    showing.current.style.display = "none";
  };

  return (
    <div className="graph-section">
      <p className="graph-amount" ref={showing}>
        {amount}
      </p>

      <div
        className="actual-graph"
        onMouseOver={handleMouseHover}
        onMouseOut={handleMouseLeft}
      >
        {createGraph()}
      </div>

      <p style={{ color: "grey" }}>{day}</p>
    </div>
  );
}
export default ListObject;
