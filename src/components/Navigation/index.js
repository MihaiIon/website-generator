import { connect } from "react-redux";

// Components
import Navigation from "./Navigation";
import NavigationSidebarComponent from "./components/NavigationSidebar";

// Actions
import { setCurrentPageIdWithLoading } from "../../actions/app";
import { open as openNavigation } from "../../actions/navigation";

const mapStateToProps = ({ app: { currentPageId }, navigation }) => ({
  currentPageId,
  ...navigation
});

const mapDispatchToProps = dispatch => ({
  setCurrentPage: id => dispatch(setCurrentPageIdWithLoading(id)),
  openNavigation: () => dispatch(openNavigation())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

export const NavigationSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationSidebarComponent);
