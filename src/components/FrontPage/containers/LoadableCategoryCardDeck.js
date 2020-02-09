import React from 'react';
import {connect} from "react-redux";
import CategoryCardDeck from "../CategoryCardDeck";
import LoadableComponent from "../../LoadableComponent/LoadableComponent";
import {categoriesArePopulated} from "../../../redux/reducers/categories";
import Jumbotron from "react-bootstrap/Jumbotron";

const mapStateToProps = (state, ownProps) => {
    const limit = ownProps.limit === undefined ? state.categories.data.length : ownProps.limit;
    const categoryCards = state.categories.data.map(category => {
        const index = state.categories.data.indexOf(category);
        if (index % 4 === 0 && limit > index) {
            return (<Jumbotron><CategoryCardDeck categories={state.categories.data.slice(index, index + 4)}/></Jumbotron>)
        }
        return null;
    });
    return {
        isLoading: state.categories.loading || !categoriesArePopulated(state.categories.data),
        component: categoryCards};
};

export default connect(mapStateToProps)(LoadableComponent);