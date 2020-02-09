import {FETCH_CATEGORIES_SUCCESS} from "../actions/ActionTypes";

const DEFAULT_STATE = {
    loading: false,
    data:    [],
    errors:  null,
};

export function categoryStore(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        default:
            return state;
    }
}