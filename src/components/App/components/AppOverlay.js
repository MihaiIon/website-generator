import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import { AnimatedComponent } from "../../../components-anim";

class AppOverlay extends Component {
  render() {
    const { isOverlay, closeNavigation } = this.props;
    const customProps = { onClick: closeNavigation };
    return (
      <AnimatedComponent
        wrapper="aside"
        mount={isOverlay}
        customProps={customProps}
        className="c-app_overlay o-overlay"
      />
    );
  }
}

AppOverlay.propTypes = {
  isOverlay: PropTypes.bool.isRequired,
  closeNavigation: PropTypes.func.isRequired
};

export default AppOverlay;
