// let url = process.env.API_SESSION;
let url = "http://localhost/api/v1/users"

import { axiosAjax } from './../../../../config/axios';
import { User } from './../../models/User';

export const serviceUsers = {
    async get(): Promise<User[]> {
        try {
            const { data } = await axiosAjax.get(url);
            return data;
        } catch (e) {
            throw new Error();
        }
    }
}
