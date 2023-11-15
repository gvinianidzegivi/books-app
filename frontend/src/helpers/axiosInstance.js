import axios from 'axios';

const API_URI = 'http://localhost:8080';
const headers = {};

const axiosInstance = axios.create({
  baseURL: API_URI,
});

export default axiosInstance;
