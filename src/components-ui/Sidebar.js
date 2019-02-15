import React, { Component } from "react";
import PropTypes from "prop-types";

// Import components
import { AnimatedComponent } from "../components-anim";

// Helpers
import classNamesHelper from "../_helpers/classNamesHelper";

class SideBar extends Component {
  getComponentClassNames() {
    const { className } = this.props;
    const { open, right, mount } = this.props;
    return classNamesHelper(
      className,
      "o-sidebar",
      ["-right", "-left", right],
      ["-close", !open || !mount]
    );
  }

  // ----------------------------------------------------------------

  render() {
    const { children, mount } = this.props;
    return (
      <AnimatedComponent wrapper="aside" className={this.getComponentClassNames()} mount={mount}>
        <div className="o-sidebar_inner">{children}</div>
      </AnimatedComponent>
    );
  }
}

SideBar.defaultProps = {
  open: true,
  mount: true,
  right: false,
  className: ""
};

SideBar.propTypes = {
  open: PropTypes.bool,
  mount: PropTypes.bool,
  right: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default SideBar;
