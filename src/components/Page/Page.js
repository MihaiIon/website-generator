import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Components
import Content from "../Content";
import { Header, Footer } from "../../components-ui";
import { AnimatedComponent } from "../../components-anim";

// Helpers
import initCodepens from "../../_helpers/initCodepens";

// Constants
import { NAVIGATION_OFFSET_TOP_THRESHOLD } from "./core/constants";

/* eslint class-methods-use-this : 0 */

class Page extends Component {
  // ------------------------------------------------------
  // Life Cycle

  componentDidMount() {
    const { documentTitle } = this.props;
    document.title = documentTitle;
    window.addEventListener("scroll", event => this.handleOnScroll(event));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  // ----------------------------------------------------
  // Methods

  initializeCodepens() {
    setTimeout(() => {
      initCodepens();
    }, 1000);
  }

  /**
   *
   */
  handleOnScroll(event) {
    const { isNavigationShrinked, shrinkNavigation, enlargeNavigation } = this.props;
    const { target } = event;
    const { scrollTop } = target.scrollingElement;

    if (!isNavigationShrinked && scrollTop > NAVIGATION_OFFSET_TOP_THRESHOLD) {
      shrinkNavigation();
    } else if (isNavigationShrinked && scrollTop < NAVIGATION_OFFSET_TOP_THRESHOLD) {
      enlargeNavigation();
    }
  }

  // ----------------------------------------------------
  // Render

  render() {
    const { headerProps, body, copyrights } = this.props;
    return (
      <Fragment>
        <AnimatedComponent wrapper="div" className="c-page" ref={this.pageRef}>
          <Header {...headerProps} />
          <Content body={body} />
          <Footer copyrights={copyrights} />
        </AnimatedComponent>
        {this.initializeCodepens()}
      </Fragment>
    );
  }
}

Page.propTypes = {
  isNavigationShrinked: PropTypes.bool.isRequired,
  copyrights: PropTypes.string.isRequired,
  documentTitle: PropTypes.string.isRequired,
  shrinkNavigation: PropTypes.func.isRequired,
  enlargeNavigation: PropTypes.func.isRequired,
  body: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired,
  headerProps: PropTypes.shape({
    bgColor: PropTypes.string,
    bgImage: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    subtitle: PropTypes.string,
    subtitleColor: PropTypes.string
  }).isRequired
};

export default Page;
