import * as actionTypes from './actionTypes';
import { serviceUsers } from './services';
import { FormatUser } from './hydrators';
import { User } from './../../models/User';

const fetchUsersRequest = () => ({
    type: actionTypes.FETCH_USERS_REQUEST
});

const fetchUsersSuccess = (data: User[]) => ({
    type: actionTypes.FETCH_USERS_SUCCESS, 
    data
});

const fetchUsersFailure = (msgError: string) => ({
    type: actionTypes.FETCH_USERS_FAILURE,
    msgError
});

export const fetchUsers = (): Function => {
    return async dispatch => {
        dispatch(fetchUsersRequest());
        try {
            const { data }: any = await serviceUsers.get();
            let adapted = data.map((user: User) => FormatUser(user))
            dispatch(fetchUsersSuccess(adapted))
        } catch (e) {
            dispatch(fetchUsersFailure('Error get users.'));
        }
    }
}