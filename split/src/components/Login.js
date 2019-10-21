import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

const initialState = {
    username: '',
    passwor: '',
    email: ''
}

const Login = (props) => {
    const [login, setLogin] = useState(initialState)

    const handlChanges = e => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(login)
        axiosWithAuth()
            .post('./login', login)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/split')
            })
        setLogin(initialState)
    }
    return (
        <>
            <h1>Returning User? Sign in here!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='username'
                    onChange={handlChanges}
                    value={login.username}
                />

                <input
                    type='text'
                    name='password'
                    placeholder='password'
                    onChange={handlChanges}
                    value={login.password}
                />
                <button type='submit'>Login as a User</button>

                <Link to='/register' className='btn'>Register as a User</Link>
            </form>
        </>
    );
};

export default Login;