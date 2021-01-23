import React from "react";
import ReactDOM from "react-dom";

const name="Stef";

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);

