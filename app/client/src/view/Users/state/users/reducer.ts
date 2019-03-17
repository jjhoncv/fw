import * as actionTypes from './actionTypes';
import { User } from './../../models/User';

interface State {
    data: User[];
    isFetching: boolean;
    error: boolean;
}

const initialState: State = {
    data: [],
    isFetching: false,
    error: false
}

const ROOT = '';

export const list = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.FETCH_USERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.data
            }
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                isFetching: false,
                error: false,
                data: action.data
            }
        default:
            return state;
    }
}
