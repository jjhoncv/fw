import axios, { AxiosInstance } from 'axios';

// var basicAuth = 'Basic ' + btoa(username + ':' + password);

export const axiosAjax = ((): AxiosInstance => axios.create({
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
}))();

export * from 'axios';