import React from 'react';
import {connect} from "react-redux";
import CategoryCardDeck from "../CategoryCardDeck";
import LoadableComponent from "../../LoadableComponent/LoadableComponent";
import {categoriesArePopulated} from "../../../redux/reducers/categories";

const mapStateToProps = (state) => {
    return {
        isLoading: state.categories.loading || !categoriesArePopulated(state.categories.data),
        component: (<CategoryCardDeck categories={state.categories.data}/>)};
};

export default connect(mapStateToProps)(LoadableComponent);