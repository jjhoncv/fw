// let url = process.env.API_SESSION;
let url = "http://localhost/api/v1/session"

import { axiosAjax } from './../../../../config/axios';
import { Login } from './../../models/Login';

export const serviceLogin = {
    async get(username: string, password: string): Promise<Login> {
        try {
            const { data } = await axiosAjax.post(url, { username, password });
            return data;
        } catch (e) {
            throw new Error();
        }
    }
}
