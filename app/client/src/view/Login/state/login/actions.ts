import * as actionTypes from './actionTypes';
import { serviceLogin } from './services';

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

export const successLogin = (username, password, history): Function => {
    return async dispatch => {
        dispatch(loginRequest());
        try {
            if (username && password) {
                const { data }: any = await serviceLogin.get(username, password);

                if (data.token) {
                    dispatch(loginSuccess(true));
                    localStorage.setItem('token', data.token)
                    history.push('/admin/dashboard');
                }
            }
        } catch (e) {
            dispatch(loginFailure('Error logged in.'));
        }
    }
}

export const logoutLogin = (): Function => {
    return async dispatch => {
        try {
            dispatch(loginSuccess(false));
        } catch (e) {
            dispatch(loginFailure('Error logout.'));
        }
    }
} 