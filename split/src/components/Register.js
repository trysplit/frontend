import React, { useState } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import styled from 'styled-components'
// import logo from '../images/logo.png'
import axios from 'axios'

const Register = props => {

    const [newUser, setNewUser] = useState({
        username: '',
        password: '',

    })

    const handleChange = e => {
        // console.log(e, 'onchange')
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
        console.log(newUser)
    }

    const regUser = e => {
        e.preventDefault()
        // console.log("hello")
        axios
            .post('https://split-the-bill-2.herokuapp.com/api/auth/register', newUser)
            .then(res => {
                // console.log(res)
                props.history.push('/login')
            })
            .catch(err => console.log(err, 'error on register'))
    }

    return (
        <RegForm>
            {/* <img src={logo} alt='logo' /> */}
            <Container className="reg">
                <h2>New user? Register here</h2>
                <Form className="form" onSubmit={regUser}>

                    <Col>
                        <FormGroup>
                            <Label>username</Label>
                            <Input
                                type="text"
                                name="username"
                                placeholder="username"
                                onChange={handleChange}
                                value={newUser.username}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>password</Label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={handleChange}
                                value={newUser.password}
                                autoComplete='off'
                            />
                        </FormGroup>
                    </Col>
                    <div className='button-cont'><Button type='submit' >Submit</Button></div>
                </Form>
            </Container>
        </RegForm>
    )
}

const RegForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: antiquewhite;
color: #5E6164;
height: 100vh;
padding: 30rem 0; 
.reg {
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
    margin: 0;
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

export default Register;