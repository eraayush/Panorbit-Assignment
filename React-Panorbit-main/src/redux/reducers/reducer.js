import { LOADING, API_SUCCESS, API_FAILURE, LAST_LOGGED_USERS, CURRENT_LOGIN } from '../actionTypes';

const initialState = {
    loading: false,
    error: null,
    currentUser: {},
    panorbitData: [],
    lastLoggedUsers: [],
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case API_SUCCESS:
            return { ...state, loading: false, panorbitData: action.payload };
        case API_FAILURE:
            return { ...state, loading: false, error: action.error };
        case LAST_LOGGED_USERS:
            return { ...state, lastLoggedUsers: action.payload };
        case CURRENT_LOGIN:
            return { ...state, currentUser: action.payload };
        default:
            return state;
    }
};
