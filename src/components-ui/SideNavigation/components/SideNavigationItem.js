import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Components
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

// Helpers
import classNamesHelper from "../../../_helpers/classNamesHelper";

class SideNavigationItem extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { isActive } = this.props;
    return classNamesHelper("o-side-navigation_item", "o-layout_item", ["-active", isActive]);
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { children, action } = this.props;
    return (
      <li className={this.getComponentClassNames()}>
        <button type="button" className="o-side-navigation_btn" onClick={action}>
          {children}
        </button>
      </li>
    );
  }
}

SideNavigationItem.defaultProps = {
  isActive: false
};

SideNavigationItem.propTypes = {
  isActive: PropTypes.bool,
  action: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default SideNavigationItem;
