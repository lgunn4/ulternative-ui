import {FETCH_CATEGORIES_SUCCESS} from "../actions/ActionTypes";

export function categoryStore(state = [], action) {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            console.log([...state, action.payload])
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}