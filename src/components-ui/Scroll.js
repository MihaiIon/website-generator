import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import ScrollBars from "react-custom-scrollbars";

// Helpers
import classNamesHelper from "../_helpers/classNamesHelper";

class Scroll extends Component {
  // ------------------------------------------------------
  // Methods

  getClassNamesObject() {
    const { componentName } = this.props;
    return {
      className: classNamesHelper(`c-${componentName}_scroll`, "o-scroll"),
      verticalThumbClassName: classNamesHelper(
        `c-${componentName}_scroll_thumb-v`,
        "o-scroll_thumb o-scroll_thumb-v"
      ),
      horizontalThumbClassName: classNamesHelper(
        `c-${componentName}_scroll_thumb-h`,
        "o-scroll_thumb o-scroll_thumb-h"
      )
    };
  }

  // ------------------------------------------------------
  // Render
  render() {
    const { children } = this.props;
    const {
      className,
      verticalThumbClassName,
      horizontalThumbClassName
    } = this.getClassNamesObject();
    return (
      <ScrollBars
        autoHeight
        autoHeightMin={200}
        autoHeightMax={500}
        className={className}
        renderThumbVertical={props => <div {...props} className={verticalThumbClassName} />}
        renderThumbHorizontal={props => <div {...props} className={horizontalThumbClassName} />}
      >
        {children}
      </ScrollBars>
    );
  }
}

Scroll.propTypes = {
  componentName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Scroll;
