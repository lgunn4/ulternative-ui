import React from 'react';
import { useParams } from "react-router-dom";
import LoadableCategoryPage from "./containers/LoadableCategoryPage";

const CategoryPage = ({fetchCategoryItems}) => {
    let { id } = useParams();
    fetchCategoryItems(id);

    return (
        <LoadableCategoryPage categoryId={id}/>
    );
};
export default CategoryPage;