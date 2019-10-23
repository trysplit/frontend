import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://split-the-bill-2.herokuapp.com/api/auth',
        // baseURL: 'https://split-the-bill-2.herokuapp.com/api/bills',
        // baseURL: 'https://split-the-bill-2.herokuapp.com/api/friends',
        headers: {
            Authorization: token
        }
    })

}

export default axiosWithAuth