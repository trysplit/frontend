
import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


const initialState = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: ''
}

const Register = (props) => {

    
    const [register, setRegister] = useState(initialState)


    const handleChanges = e => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(register)
        axiosWithAuth()
            .post('/auth/register', register)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('./register');
            })
        setRegister(initialState)
    }


    return (
        <>
        <div className="LoginForm">
            <h1>New user registration!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstname"
                    placeholder="firstname"
                    onChange={handleChanges}
                    value={register.firstname}
                />


                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={handleChanges}
                    value={register.email}
                />
            </form>
            <button>Register</button>
        </div>
            
        </>
    )
}


export default Register;