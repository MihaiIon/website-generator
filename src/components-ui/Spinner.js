import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import { AnimatedComponent } from "../components-anim";

class LoadingIcon extends Component {
  render() {
    const { mount } = this.props;
    return (
      <AnimatedComponent wrapper="div" mount={mount} className="c-spinner">
        <div className="c-spinner_icon">
          <div className="c-spinner_inner" />
        </div>
      </AnimatedComponent>
    );
  }
}

LoadingIcon.propTypes = {
  mount: PropTypes.bool.isRequired
};

export default LoadingIcon;
