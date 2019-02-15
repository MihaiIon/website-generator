import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import { AnimatedComponent } from "../../components-anim";

class SideNavigation extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentModifiers() {
    const { right } = this.props;
    return right ? " -right" : "";
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { className, children } = this.props;
    return (
      <AnimatedComponent
        className={`${className} o-side-navigation${this.getComponentModifiers()}`}
        wrapper="nav"
      >
        <ul className="o-side-navigation_list o-layout">{children}</ul>
      </AnimatedComponent>
    );
  }
}

SideNavigation.defaultProps = {
  right: false,
  className: ""
};

SideNavigation.propTypes = {
  right: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
  // items: PropTypes.shape({
  //   locId: PropTypes.string.isRequired,
  //   id: PropTypes.string.isRequired,
  //   iconType: PropTypes.string.isRequired,
  //   href: PropTypes.string.isRequired,
  //   action: PropTypes.func
  // }).isRequired
};

export default SideNavigation;
