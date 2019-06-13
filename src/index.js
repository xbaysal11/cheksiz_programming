import React from "react";
import ReactDOM from "react-dom";
import particlesJS from "particles.js";

import "./assets/fonts/flaticon/font/_flaticon.scss";
import "./assets/fonts/icomoon/icomoon.ttf";
import "./index.scss";
import App from "./App";

// particlesJS.load("particles-js", "assets/particles.json", function() {
//   console.log("callback - particles-js config loaded");
// });

ReactDOM.render(<App />, document.getElementById("root"));
