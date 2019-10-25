import React from 'react'

import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Home = () => {

    const HomeCont = styled.div`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;padding: 30rem 0; 
       p{
        width: 100%;
        text-align: center;
        margin-bottom: 5%;
        font-size: 4.5rem;
        overflow: hidden;
        background: linear-gradient(90deg, darkolivegreen, goldenrod, forestgreen);
        background-repeat: repeat;
        background-size: 80%;
        animation: animate 5s linear infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: rgba(255, 255, 255, 0);
       }
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
    `;


    return (
        <HomeCont>


            <p>Returning user? click here to log in</p>
            <Link className="Link" to='/login'><Button>Log in</Button></Link>
            <p>New user? click here to register</p>
            <Link className="Link"  to='/register'><Button>Register</Button></Link>
        </HomeCont>
    )
}

export default Home;