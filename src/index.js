import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

// Styles
import "./scss/main.scss";

// Components
import Root from "./components/Root";

if (module.hot) {
  module.hot.accept();
}

// Render App
ReactDOM.render(<Root />, document.getElementById("root"));
