import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchCategories} from "../../../redux/actions/categoryActions";
import ExplorePage from "../ExplorePage";

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({fetchCategories}, dispatch)
};

export default connect(null, mapdispatchToProps)(ExplorePage);