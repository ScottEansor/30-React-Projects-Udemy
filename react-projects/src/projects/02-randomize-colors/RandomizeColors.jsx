import React from "react";
import Title from "../components/Title";

export default function RandomizeColors() {
  function handleClick(e) {
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  }

  const handleSecondClick = (e) => {
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="container">
      <Title text={"Randomize Color"} classes={"mb-4"}></Title>
      {/* buttons below */}
      <button className="btn btn-danger" onClick={(e) => handleClick(e)}>
        Click Me first
      </button>
      <button className="btn btn-success" onClick={handleSecondClick}>
        Click Me second
      </button>
      <button className="btn btn-primary" onClick={handleSecondClick}>
        Click Me third
      </button>
      <button className="btn btn-warning" onClick={handleSecondClick}>
        Dont click me!
      </button>
    </div>
  );
}
