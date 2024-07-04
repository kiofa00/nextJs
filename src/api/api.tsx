import axios, { InternalAxiosRequestConfig } from 'axios';

const url = 'https://dummyjson.com';

const api = axios.create({
	baseURL: url,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const accessToken = localStorage.getItem('accessToken');
		if (accessToken) {
			config.headers['Authorization'] = `Bearer ${JSON.parse(accessToken)}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default api;
