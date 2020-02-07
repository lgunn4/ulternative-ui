import {FETCH_CATEGORIES_SUCCESS} from "../actions/ActionTypes";

export function categoryStore(state = [], action) {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}