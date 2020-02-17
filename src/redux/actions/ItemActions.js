import {
    FETCH_ITEMS_ENDED,
    FETCH_ITEMS_FAILED,
    FETCH_ITEMS_STARTED,
    FETCH_ITEMS_SUCCESS
} from "./ActionTypes";
import {getItems} from "../service/item";


export const fetchCategoryItems = (categoryId) => (dispatch) => {
    dispatch({
        type: FETCH_ITEMS_STARTED,
    });
    getItems(categoryId).then(response => {
        dispatch({
            type: FETCH_ITEMS_SUCCESS,
            payload: response,
        })
    }).catch((error) => {
        dispatch({
            type: FETCH_ITEMS_FAILED,
            payload: error,
        });
    }).finally(() => {
        dispatch({
            type: FETCH_ITEMS_ENDED
        })
    })
};