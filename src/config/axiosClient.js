import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'http://localhost:5178/api',
    headers: {
        Accept: 'application/json',
    },
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
},
    (error) => {
        if (error.response.data) {
            return Promise.reject(error.response.data);
        }
        else if (error.message) {
            return Promise.reject(error.message);
        }
        else {
            return Promise.reject(error);
        }
    }
);

export default axiosClient;
