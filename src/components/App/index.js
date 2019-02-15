import { connect } from "react-redux";

// Components
import App from "./App";
import AppOverlayComponent from "./components/AppOverlay";

// Actions
import { close as closeNavigation } from "../../actions/navigation";

const mapStateToProps = ({ app: { isCrop, isLoading, isOverlay, currentPageId } }) => ({
  isCrop,
  isLoading,
  isOverlay,
  currentPageId
});

const mapDispatchToProps = dispatch => ({
  closeNavigation: () => dispatch(closeNavigation())
});

export default connect(mapStateToProps)(App);

export const AppOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppOverlayComponent);
