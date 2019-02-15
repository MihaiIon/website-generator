import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";

// Components
import NavigationHeader from "./NavigationHeader";
import { SideBar, SideNavigation, SideNavigationItem } from "../../../components-ui";

class NavigationSidebar extends Component {
  render() {
    const { isOpen, items } = this.props;
    const { currentPageId, setCurrentPage } = this.props;
    return (
      <SideBar mount={isOpen} className="c-navigation_sidebar" open={isOpen} right>
        <NavigationHeader />
        <SideNavigation>
          {items.map(item => (
            <SideNavigationItem
              key={uniqid(item.text)}
              isActive={item.id === currentPageId}
              action={() => setCurrentPage(item.id)}
            >
              {item.text}
            </SideNavigationItem>
          ))}
        </SideNavigation>
      </SideBar>
    );
  }
}

NavigationSidebar.defaultProps = {
  items: []
};

NavigationSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  currentPageId: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default NavigationSidebar;
