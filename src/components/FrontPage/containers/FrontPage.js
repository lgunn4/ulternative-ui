import {connect} from "react-redux";
import FrontPage from "../FrontPage";
import {bindActionCreators} from "redux";
import {fetchCategories} from "../../../redux/actions/categoryActions";

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({fetchCategories}, dispatch)
};

const mapStateToProps = (state) => {
    return { categories: state.categories.data};
};

export default connect(mapStateToProps, mapdispatchToProps)(FrontPage);