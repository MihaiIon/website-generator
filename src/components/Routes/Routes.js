import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import Page from "../Page";

// Constants
import { PATHS } from "./core/constants";

class Routes extends Component {
  // ------------------------------------------------------
  // Methods

  getHeaderProps() {
    const { path } = this.props;
    switch (path) {
      case PATHS.EVALUATION_GRID:
        return {
          title: "Grille d'évaluations",
          subTitle: "Evaluation Grid"
        };
      default:
        return {};
    }
  }

  getTitle() {
    const { path } = this.props;
    switch (path) {
      case PATHS.EVALUATION_GRID:
        return "Évaluations";
      default:
        return "Projet";
    }
  }

  // ------------------------------------------------------
  // Render

  render() {
    return <Page title={this.getTitle()} headerProps={this.getHeaderProps()} />;
  }
}

Routes.propTypes = {
  path: PropTypes.string.isRequired
};

export default Routes;
