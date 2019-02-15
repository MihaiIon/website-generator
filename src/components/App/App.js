import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import Page from "../Page";
import Navigation from "../Navigation";
import QuickMenu from "../QuickMenu";
import { Loading } from "../../components-ui";
import { AppOverlay } from ".";

// Helpers
import classNamesHelper from "../../_helpers/classNamesHelper";
import getConfiguration from "../../_helpers/getConfiguration";
import * as selectors from "../../_helpers/selectors";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...getConfiguration().project
    };
  }

  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { isCrop } = this.props;
    return classNamesHelper("c-app", ["-crop", isCrop]);
  }

  getCurrentPage() {
    const { pages, copyrights } = this.state;
    const { currentPageId } = this.props;
    for (let i = 0; i < pages.length; i += 1) {
      if (currentPageId === i) {
        return (
          <Page
            headerProps={selectors.getHeaderProps(pages[i])}
            body={selectors.getBody(pages[i])}
            documentTitle={this.formatDocumentTitle(pages[i].title)}
            copyrights={copyrights}
          />
        );
      }
    }
    return null;
  }

  getCurrentQuickMenuItems() {
    const { pages } = this.state;
    const { currentPageId } = this.props;
    return selectors.getQuickMenuItems(pages[currentPageId].body);
  }

  formatDocumentTitle(pageTitle = "Missing Page Title") {
    return `${selectors.getDocumentTitle(this.state)} | ${pageTitle}`;
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { isLoading } = this.props;
    return (
      <div id="app" className={this.getComponentClassNames()}>
        <AppOverlay />
        <Loading mount={isLoading} />
        <Navigation items={selectors.getNavigationItems(this.state)} />
        {this.getCurrentPage()}
        <QuickMenu items={this.getCurrentQuickMenuItems()} />
      </div>
    );
  }
}

App.propTypes = {
  isCrop: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentPageId: PropTypes.number.isRequired
};

export default App;
