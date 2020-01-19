import {
    FETCH_CATEGORIES_ENDED,
    FETCH_CATEGORIES_FAILED,
    FETCH_CATEGORIES_STARTED,
    FETCH_CATEGORIES_SUCCESS
} from "./ActionTypes";
import {getCategories} from "../service/category";


export const fetchCategories = () => (dispatch) => {
    dispatch({
        type: FETCH_CATEGORIES_STARTED,
    });
    getCategories().then(response => {
        console.log(response);
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: response,
        })
    }).catch((error) => {
        dispatch({
            type: FETCH_CATEGORIES_FAILED,
            payload: error,
        });
    }).finally(() => {
        dispatch({
            type: FETCH_CATEGORIES_ENDED
        })
    })
}