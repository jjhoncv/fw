import * as actionTypes from './actionTypes';
import { serviceLogin } from './services';
// import { pushState } from 'redux-router';

const loginRequest = () => ({
    type: actionTypes.FETCH_LOGIN_REQUEST
});

const loginSuccess = (data) => ({
    type: actionTypes.FETCH_LOGIN_SUCCESS,
    data
});

const loginFailure = (msgError: string) => ({
    type: actionTypes.FETCH_LOGIN_FAILURE,
    msgError
});

export const successLogin = ({ username, password }): Function => {
    return async dispatch => {
        dispatch(loginRequest());
        try {
            if (username && password) {
                const { data }: any = await serviceLogin.get(username, password);
                if (data.id) {
                    alert('ss');
                }
            }
        } catch (e) {
            dispatch(loginFailure('Error get Province.'));
        }
    }
}