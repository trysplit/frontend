
import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const initialState = {
    username: '',
    passwor: '',
    email: ''
}

const Login = (props) => {

    const HomeCont = styled.div`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       /* height: 100vh; */
       img {
           width:25rem;
       }
       p {
        font-style: italic;
        fomt-size: 40px;
        margin: 0;
       }
       button {
           background: #6E588A;
           border-style: none;
           width: 8rem;
           margin: 1rem;
       }
    `;

    const [login, setLogin] = useState(initialState)

    const handleChanges = e => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(login)
        axiosWithAuth()
            .post('/auth/login', login)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/split')
            })
        setLogin(initialState)
    }
    return (
        <>
          <div className="HomeCont">
                <h1>Returning User? Sign in here!</h1>
                  <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        onChange = {handleChanges}
                        value = {login.username}
                        class=""
                    />

                    <input
                        type='text'
                        name='password'
                        placeholder='password'
                        onChange={handleChanges}
                        value={login.password}
                    />
                     <button type='submit'>Login as a User</button>

                     <Link to='/register' className='btn'>Register as a User</Link>
                    </form>
            </div>
            
        </>
    );
};

export default Login;