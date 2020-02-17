import React from 'react';
import {connect} from "react-redux";
import LoadableComponent from "../../LoadableComponent/LoadableComponent";
import {itemsArePopulated} from "../../../redux/reducers/items";
import LoadableCategoryPage from "../LoadableCategoryPage";

const mapStateToProps = (state, ownProps) => {
    const {categoryId} = ownProps;
    const component = (<LoadableCategoryPage category={state.itemsByCategoryId.data[categoryId]}/>);
    return {
        isLoading: state.itemsByCategoryId.loading || !itemsArePopulated(state.itemsByCategoryId.data),
        component: component,
    }
};

export default connect(mapStateToProps)(LoadableComponent);