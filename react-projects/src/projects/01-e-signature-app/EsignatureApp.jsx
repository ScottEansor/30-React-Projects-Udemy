import Title from "../components/Title";
import React, { useState } from "react";

export default function EsignatureApp() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted", // Fixed the typo here
    outline: "none",
    padding: ".3rem 0",
  };
  document.body.style.background = "#eee";

  //functions
  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <div className="container text-center">
      <Title text={name} classes={"title"} />
      <Title text={date} classes={"main-title mb-4"} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
        consequatur necessitatibus! Et impedit est nemo voluptate iste deserunt
        quia neque possimus asperiores unde? Tempore, excepturi?
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "30vh",
        }}
      >
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
      </footer>
    </div>
  );
}
