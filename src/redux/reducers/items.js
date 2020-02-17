import {
    FETCH_ITEMS_ENDED,
    FETCH_ITEMS_FAILED,
    FETCH_ITEMS_STARTED,
    FETCH_ITEMS_SUCCESS
} from "../actions/ActionTypes";

const DEFAULT_STATE = {
    loading: false,
    data:    [],
    errors:  null,
};

export function itemStore(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case FETCH_ITEMS_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.payload.categoryId]: action.payload.categoryItems,
                }
            };
        case FETCH_ITEMS_FAILED:
        case FETCH_ITEMS_ENDED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

export const itemsArePopulated = (data) => {
    return data.length !== 0;
};