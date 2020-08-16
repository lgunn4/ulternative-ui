import React from "react";
import Query from "../../components/Query";
import FrontPage from "../../components/FrontPage/FrontPage";
import CATEGORIES_QUERY from "../../queries/categories";

const Home = ({children}) => {
    return (<Query query={CATEGORIES_QUERY}>
        {({ data: { categories } }) => {
            return <FrontPage categories={categories} children={children} />;
        }}
    </Query>);
};

export default Home;