import React, { Component } from "react";
import PropTypes from "prop-types";

// Constants
import { SPEED } from "../constants/time";

// import components
import { Spinner } from ".";
import { AnimatedComponent } from "../components-anim";

class Loading extends Component {
  render() {
    const { mount } = this.props;
    return (
      <AnimatedComponent wrapper="aside" className="c-loading o-overlay" mount={mount}>
        <Spinner mount />
      </AnimatedComponent>
    );
  }
}

Loading.propTypes = {
  mount: PropTypes.bool.isRequired
};

export default Loading;
