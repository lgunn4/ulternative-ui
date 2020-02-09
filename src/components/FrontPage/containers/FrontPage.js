import {connect} from "react-redux";
import FrontPage from "../FrontPage";
import {bindActionCreators} from "redux";
import {fetchCategories} from "../../../redux/actions/categoryActions";

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({fetchCategories}, dispatch)
};

export default connect(null, mapdispatchToProps)(FrontPage);