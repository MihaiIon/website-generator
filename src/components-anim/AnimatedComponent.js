import React, { Component } from "react";
import PropTypes from "prop-types";

// Helpers
import classNamesHelper from "../_helpers/classNamesHelper";

// Constants
import { DEFAULT_DELAY_BEFORE_ANIMATION, DEFAULT_DELAY_BEFORE_UNMOUNT } from "../constants/time";

class AnimatedComponent extends Component {
  constructor(props) {
    super(props);
    const { mount } = props;
    this.state = {
      animate: false,
      isMounted: mount
    };
  }

  // -----------------------------------------------------------
  // Life Cycles

  componentDidMount() {
    this.animateComponent();
  }

  componentDidUpdate() {
    this.animateComponent();
  }

  // -----------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { className, mount } = this.props;
    const { animate, isMounted } = this.state;

    return classNamesHelper(
      className,
      "o-animated",
      ["-show", "-hide", mount && isMounted],
      ["-animate", mount && animate],
      this.getAnimationClassNames()
    );
  }

  /**
   *
   */
  getAnimationClassNames() {
    const { fadeInUp, fadeInDown, fadeInLeft, fadeInRight } = this.props;
    const { fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight } = this.props;

    let classNames = "";

    // Fade In
    if (fadeInUp) {
      classNames += " -fade-in-up";
    } else if (fadeInDown) {
      classNames += " -fade-in-down";
    } else if (fadeInLeft) {
      classNames += " -fade-in-left";
    } else if (fadeInRight) {
      classNames += " -fade-in-right";
    }

    // Fade Out
    if (fadeOutUp) {
      classNames += " -fade-out-up";
    } else if (fadeOutDown) {
      classNames += " -fade-out-down";
    } else if (fadeOutLeft) {
      classNames += " -fade-out-left";
    } else if (fadeOutRight) {
      classNames += " -fade-out-right";
    }

    return classNames;
  }

  animateComponent() {
    const { animate, isMounted } = this.state;
    const { delayBeforeAnimation, delayBeforeUnmount, mount } = this.props;
    if (!isMounted && mount) {
      this.setState({ isMounted: true });
    } else if (isMounted && !animate) {
      setTimeout(() => this.setState({ animate: true }), delayBeforeAnimation);
    } else if (animate && !mount) {
      this.setState({ animate: false });
      setTimeout(() => this.setState({ isMounted: false }), delayBeforeUnmount);
    }
  }

  // -----------------------------------------------------------
  // Render

  render() {
    const { isMounted } = this.state;
    const { wrapper, customProps, children } = this.props;
    return isMounted
      ? React.createElement(
          wrapper,
          {
            className: this.getComponentClassNames(),
            ...customProps
          },
          children
        )
      : null;
  }
}

AnimatedComponent.defaultProps = {
  mount: true,

  fadeInUp: false,
  fadeInDown: false,
  fadeInLeft: false,
  fadeInRight: false,

  fadeOutUp: false,
  fadeOutDown: false,
  fadeOutLeft: false,
  fadeOutRight: false,

  delayBeforeAnimation: DEFAULT_DELAY_BEFORE_ANIMATION,
  delayBeforeUnmount: DEFAULT_DELAY_BEFORE_UNMOUNT,

  className: "",
  wrapper: "div",
  children: null,
  customProps: {}
};

AnimatedComponent.propTypes = {
  mount: PropTypes.bool,

  fadeInUp: PropTypes.bool,
  fadeInDown: PropTypes.bool,
  fadeInLeft: PropTypes.bool,
  fadeInRight: PropTypes.bool,

  fadeOutUp: PropTypes.bool,
  fadeOutDown: PropTypes.bool,
  fadeOutLeft: PropTypes.bool,
  fadeOutRight: PropTypes.bool,

  delayBeforeAnimation: PropTypes.number,
  delayBeforeUnmount: PropTypes.number,
  className: PropTypes.string,
  wrapper: PropTypes.string,
  children: PropTypes.node,
  customProps: PropTypes.shape({})
};

export default AnimatedComponent;
