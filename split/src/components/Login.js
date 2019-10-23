import React, { useState } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import styled from 'styled-components'
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom'

const Login = props => {
    // console.log(props)

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        // console.log(e)
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        // console.log(credentials)
    }

    const userLogin = e => {
        e.preventDefault();
        // console.log(credentials)
        // e.persist();
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                // console.log(res)
                localStorage.setItem('token', res.data.token);
                props.history.push('/bill')
            })
            .catch(err => console.log(err, 'error on login'))
    }

    return (

        <LoginStyle>
            <Container className="login">
                <h2>Returning User? Sign in here</h2>

                <Form className="form" onSubmit={userLogin} autoComplete='on'>
                    <Col>
                        <FormGroup>

                        </FormGroup>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="username"
                                value={credentials.username}
                                placeholder="username"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                value={credentials.password}
                                placeholder='password'
                                onChange={handleChange}
                                autoComplete='off'
                            />
                        </FormGroup>
                    </Col>
                    <Link to="/bill"> <div className='button-cont'><Button type='submit' >Log In</Button></div></Link>
                </Form>
            </Container>
        </LoginStyle>

    )
}

const LoginStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img {
    width: 25rem;
}
.login {
    width: 30rem;
    .button-cont {
        display: flex;
        justify-content: center;
        button {
            width: 8rem;
            background: #6E588A;
            
        }
    }
}
`;

export default Login;