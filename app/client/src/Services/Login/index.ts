// let url = process.env.API_SESSION;
let url = "http://localhost:80/api/?login"

console.log('url', url);

import { axiosAjax } from './../../config/axios';

export function ServiceLogin(user: string, password: string) {

    const params = new URLSearchParams();
    params.append('user', user);
    params.append('password', password);

    axiosAjax.post(`${url}`, params);
}