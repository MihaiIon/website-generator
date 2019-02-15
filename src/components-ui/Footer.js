import React, { Component } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
  render() {
    const { copyrights } = this.props;
    return <footer className="c-footer">{copyrights}</footer>;
  }
}

Footer.propTypes = {
  copyrights: PropTypes.string.isRequired
};

export default Footer;
