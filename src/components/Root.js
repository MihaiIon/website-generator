// ======================================================
// Componments / Root
// ======================================================

import React, { Component } from "react";
import { Provider } from "react-redux";

// App
import App from "./App";
import configureStore from "../configureStore";

class Root extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}

export default Root;
