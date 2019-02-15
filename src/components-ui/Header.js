import React, { Component } from "react";
import PropTypes from "prop-types";

// Helper
import stylesHelper from "../_helpers/stylesHelper";

class Header extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentStyles() {
    const { bgColor, bgImage, titleColor, subtitleColor } = this.props;
    return {
      jumbotronStyles: stylesHelper(
        ["backgroundImage", bgImage ? `url(${bgImage})` : "none"],
        ["backgroundColor", bgColor]
      ),
      titleStyles: stylesHelper(["color", titleColor]),
      subtitleSyles: stylesHelper(["color", subtitleColor])
    };
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { title, subtitle } = this.props;
    const { jumbotronStyles, titleStyles, subtitleSyles } = this.getComponentStyles();
    return (
      <header className="c-header">
        <div className="c-header_jumbotron" {...jumbotronStyles}>
          <div className="c-header_overlay">
            <h1 className="c-header_h1" {...titleStyles}>
              {title}
            </h1>
            <h2 className="c-header_h2" {...subtitleSyles}>
              {subtitle}
            </h2>
          </div>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  bgColor: "#222222",
  bgImage: null,
  title: "Missing Title",
  titleColor: "#fff",
  subtitle: "Missing Subtitle",
  subtitleColor: "#f2f2f2"
};

Header.propTypes = {
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string
};

export default Header;
