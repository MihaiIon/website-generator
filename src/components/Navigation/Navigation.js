import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

// Components
import { IoIosMenu as MenuIcon } from "react-icons/io";
import { AnimatedComponent } from "../../components-anim";
import { NavigationSidebar } from ".";

// Helpers
import classNamesHelper from "../../_helpers/classNamesHelper";

class Navigation extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { isShrinked } = this.props;
    return classNamesHelper("c-navigation", ["-shrink", isShrinked]);
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { items } = this.props;
    const { currentPageId, setCurrentPage, openNavigation } = this.props;
    return (
      <Fragment>
        <AnimatedComponent mount wrapper="nav" className={this.getComponentClassNames()}>
          <div className="c-navigation_wrapper o-wrapper">
            <div className="c-navigation_logo">
              <img className="c-navigation_logo_img" src="static/logo_small.png" alt="Logo" />
            </div>
            <ul className="c-navigation_list">
              {items.map((item, i) => (
                <li
                  key={item.text}
                  className={classNamesHelper("c-navigation_item", [
                    "-active",
                    i === currentPageId
                  ])}
                  onClick={() => setCurrentPage(item.id)}
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <button type="button" className="c-navigation_burger-menu" onClick={openNavigation}>
              <MenuIcon className="c-navigation_burger-menu_icon" />
            </button>
          </div>
        </AnimatedComponent>
        <NavigationSidebar items={items} />
      </Fragment>
    );
  }
}

Navigation.propTypes = {
  isShrinked: PropTypes.bool.isRequired,
  currentPageId: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  openNavigation: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Navigation;
