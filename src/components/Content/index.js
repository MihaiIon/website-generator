import { connect } from "react-redux";

// Components
import Content from "./Content";

const mapStateToProps = ({ app: { data } }) => ({ data });

export default connect(mapStateToProps)(Content);
