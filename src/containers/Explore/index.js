import React from "react";
import Query from "../../components/Query";
import CATEGORIES_QUERY from "../../queries/categories";
import ExplorePage from "../../components/ExplorePage/ExplorePage";

const Explore = ({children}) => {
    return (<Query query={CATEGORIES_QUERY}>
        {({ data: { categories } }) => {
            return (<ExplorePage categories={categories} children={children} />);
        }}
    </Query>);
};

export default Explore;