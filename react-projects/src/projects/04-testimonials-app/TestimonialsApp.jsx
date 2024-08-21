import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function TestimonialsApp() {
  // Corrected the typo in the component name
  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (testimonials) {
      fetch(
        `https://jsonplaceholder.typicode.com/${testimonials.toLowerCase()}`
      )
        .then((response) => response.json())
        .then((json) => setItems(json));
    }
  }, [testimonials]);

  return (
    <div className="m-auto">
      <Title text="TestimonialsApp" />{" "}
      {/* Corrected the typo in the title text */}
      <Button
        text={"Posts"}
        btnClass="btn-info"
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonials("posts")}
      />
      <Button
        text={"Users"}
        btnClass="btn-info"
        icon={<FaUserAlt />}
        onClick={() => setTestimonials("users")}
      />
      <Button
        text={"Comments"}
        btnClass="btn-info"
        icon={<BiCommentDetail />}
        onClick={() => setTestimonials("comments")}
      />
      <Title
        classes={"subtitle text-primary"}
        text={!testimonials ? "Select form above!" : testimonials}
      />
      {!items.length ? (
        <p>No data available</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="card card-primary mb-2">
            {/* Example rendering based on selected endpoint */}
            {testimonials === "posts" && (
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.body}</p>
              </div>
            )}
            {testimonials === "users" && (
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.email}</p>
              </div>
            )}
            {testimonials === "comments" && (
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.body}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
