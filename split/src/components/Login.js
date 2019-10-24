import React, { useState } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import styled from 'styled-components'
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
    // console.log(props)


    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        e.preventDefault();
        // console.log(e)
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        // console.log(credentials)
    }

    const userLogin = e => {
        e.preventDefault();
        // e.persist();
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token);
                props.history.push('/bill')
            })
            .catch(err => console.log(err, 'error on login'))
    }
    // const CallConsole = ()=>{console.log("Hello");}

    return (

        <LoginStyle>
            <Container className="login">
                <h2>Returning User? Sign in here</h2>
                <Form className="form" onSubmit={userLogin} autoComplete='on'>
                    <Col>
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
                    <div className='button-cont'><Button type='submit' >Log In</Button></div>
                </Form>
            </Container>
        </LoginStyle>

    )
}

const LoginStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: antiquewhite;
color: #5E6164;
height: 100vh;
padding: 30rem 0; 
.login {
    form {
        label{
            font-size: 2rem;
        }
        input{
            font-size: 2rem;
            placehoder{
             font-size: 2rem;
            }
            type{
                font-size: 2rem;
            }
        }
    }
    h2{
        width: 100%;
        padding: 15px;
        text-align: center;
        margin-bottom: 5%;
        font-size: 4.5rem;
        position: relative;
        letter-spacing: 4px;
        overflow: hidden;
        background: linear-gradient(90deg, darkolivegreen, goldenrod, forestgreen);
        background-repeat: repeat;
        background-size: 80%;
        animation: animate 5s linear infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: rgba(255, 255, 255, 0);
    }
    width: 30rem;
    .button-cont {
        display: flex;
        justify-content: center;
        button {
            width: 8rem;
            background: #6E588A;
            background-color: darkolivegreen;
            margin: 0 10px 20px;
            cursor: pointer;
            width: 200px;
            height: 40px;
            font-size: 2rem;
            border-radius: 10px;
            color: white;
            font-family: 'Noticia Text', serif;
            
        }
    }
}
`;

export default Login;