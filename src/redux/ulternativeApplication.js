import { combineReducers } from 'redux';
import {categoryStore} from "./reducers/categories";
import {itemStore} from "./reducers/items";

export const ulternativeApplication = combineReducers({
    categories: categoryStore,
    itemsByCategoryId: itemStore,
});