import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import CATEGORY_QUERY from "../../queries/category";
import CategoryPage from "../../components/CategoryPage/CategoryPage";

const Category = ({children}) => {
    let { id } = useParams();
    return (<Query query={CATEGORY_QUERY} id={id}>
        {({ data: { category } }) => {
            return (<CategoryPage category={category} children={children} />);
        }}
    </Query>);
};

export default Category;