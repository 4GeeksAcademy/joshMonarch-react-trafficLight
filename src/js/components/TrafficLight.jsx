import { useState } from "react";
import { Light } from "./Light";

export const TrafficLight = () => {
  const [color, setColor] = useState("");
  const [newDiv, setNewDiv] = useState(false);

  const switchHandler = () => {
    switch (color) {
      case "red":
        setColor("yellow");
        break;
      case "yellow":
        setColor("green");
        break;
      case "green":
        newDiv ? setColor("purple") : setColor("red");
        break;
      case "purple":
        setColor("red");
        break;
      default:
        setColor("red");
        break;
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-evenly align-items-center rounded-4">
        <Light color={color === "red" ? "red" : ""} />
        <Light color={color === "yellow" ? "yellow" : ""} />
        <Light color={color === "green" ? "green" : ""} />
        {newDiv && <Light color={color === "purple" ? "purple" : ""} />}
      </div>
      <div className="d-flex flex-column gap-2">
        <button className="btn btn-primary" onClick={switchHandler}>
          Switch color
        </button>
        <button className="btn btn-secondary" onClick={() => setNewDiv(true)}>
          Add purple
        </button>
      </div>
    </>
  );
};
