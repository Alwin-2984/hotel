import axios from 'axios';

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type' : 'application/json',
    }
});

API.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const fetchUsers = async () => {
    const res = await API.get('/users');
    return res.data;
};

