import React from "react";
import ReactDOM from "react-dom";

const name = "Stef";
const currentDate = new Date();
console.log(currentDate);
const currentYear = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
