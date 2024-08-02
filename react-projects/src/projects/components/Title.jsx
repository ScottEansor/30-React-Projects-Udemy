import React from "react";

export default function Title({ text, classes }) {
  return (
    <h1 className={!classes ? "title" : classes || "title  text-center"}>
      {!text ? "title" : text}
    </h1>
  );
}
