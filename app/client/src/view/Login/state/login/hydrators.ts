import { Login } from './../../models/Login';

export const FormatLogin = (data): Login => {
    let dataValue: Login = {
        username: '',
        password: ''
    };
    if (data.length) {
        let dataUser: Login = data;
        dataValue = {
            username: dataUser.username,
            password: dataUser.password
        };
    }
    return dataValue;
}
