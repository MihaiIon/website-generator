import React, { Component } from "react";
import PropTypes from "prop-types";

class NavigationHeader extends Component {
  render() {
    return (
      <div className="c-navigation_header">
        <img className="c-navigation_header_logo" src="./static/logo_small.png" alt="logo" />
      </div>
    );
  }
}

NavigationHeader.propTypes = {};

export default NavigationHeader;
