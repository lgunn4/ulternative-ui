import { combineReducers } from 'redux';
import {categoryStore} from "./reducers/categories";

export const ulternativeApplication = combineReducers({
    categories: categoryStore,
});