import React from "react";

export default function Packages(props) {
  return (
    <div className="inner-package-el">
      <h2>{props.headline}</h2>
      <p>{props.text}</p>
      <a href={props.button}>
        <button className="btn">Order Now</button>
      </a>
    </div>
  );
}
