import React, { useState } from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import img from "./img/hockey.jpg";

export default function LikeMyPhoto() {
  //   let like = false;
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
    }
  };

  return (
    <div className="container text-center">
      <Title text={"Like Photo App"}></Title>
      <Title classes={"subtitle"} text={`Like Count: ${count}`}></Title>
      <div
        className="card card-dark m-auto shadow-sm"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small>DogyDog</small>
        </div>
        <img
          src={img}
          alt="img"
          style={{ height: "fit-content" }}
          onClick={toggleLike}
        />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          {" "}
          <AiOutlineComment />
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}
