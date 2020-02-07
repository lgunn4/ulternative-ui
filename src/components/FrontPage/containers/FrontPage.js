import {connect} from "react-redux";
import FrontPage from "../FrontPage";
import {bindActionCreators} from "redux";
import {fetchCategories} from "../../../redux/actions/categoryActions";

const mapStateToProps = (state) => {
    return { categories: state.categories};
};

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({fetchCategories}, dispatch)
};

export default connect(mapStateToProps, mapdispatchToProps)(FrontPage);