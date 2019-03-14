// let url = process.env.API_SESSION;
let url = "http://localhost/api/v1/users"

console.log('url', url);

import { axiosAjax } from './../../config/axios';

export function ServiceLogin(username: string, password: string) {

    axiosAjax.post(`${url}`, { username, password });
}