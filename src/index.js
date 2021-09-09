import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  // custom styling
  color: "red",
  fontsize: "20px",
  border: "1px solid black"
};
customStyle.color = "blue"; // overriding the color
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
