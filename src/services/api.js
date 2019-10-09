import axios from 'axios';
const api = axios.create({
    baseURL: 'http://192.168.15.26:3141'
})

export default api;