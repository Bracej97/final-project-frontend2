import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mysite-fr3d.onrender.com',
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Token ${token}`;
          }
          return config;
    },
    (error) => Promise.reject(error)
);

export default api;
