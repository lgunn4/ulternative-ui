import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchCategoryItems} from "../../../redux/actions/ItemActions";
import CategoryPage from "../CategoryPage";

const mapdispatchToProps = (dispatch) => {
    return bindActionCreators({fetchCategoryItems}, dispatch)
};

export default connect(null, mapdispatchToProps)(CategoryPage);