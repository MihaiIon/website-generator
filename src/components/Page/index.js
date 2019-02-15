import { connect } from "react-redux";

// Components
import Page from "./Page";

// Actions
import { shrink, enlarge } from "../../actions/navigation";

const mapStateToProps = ({ navigation, quickmenu }) => ({
  isNavigationShrinked: navigation.isShrinked,
  isQuickMenuOpen: quickmenu.isOpen
});

const mapDispatchToProps = dispatch => ({
  shrinkNavigation: () => dispatch(shrink()),
  enlargeNavigation: () => dispatch(enlarge())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
