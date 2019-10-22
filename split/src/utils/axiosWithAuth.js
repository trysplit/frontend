import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:3001/Bill',
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth