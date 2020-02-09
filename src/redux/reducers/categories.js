import {
    FETCH_CATEGORIES_ENDED,
    FETCH_CATEGORIES_FAILED,
    FETCH_CATEGORIES_STARTED,
    FETCH_CATEGORIES_SUCCESS
} from "../actions/ActionTypes";

const DEFAULT_STATE = {
    loading: false,
    data:    [],
    errors:  null,
};

export function categoryStore(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case FETCH_CATEGORIES_FAILED:
        case FETCH_CATEGORIES_ENDED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

export const categoriesArePopulated = (data) => {
    return data.length !== 0;
};