import React from 'react'

import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Home = () => {

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
           width: 80px;
           margin: 1rem;
       }
    `;


    return (
        <HomeCont>


            <p>Returning user? click here to log in</p>
            <Link to='/login'><Button>Log in as customer</Button></Link>
            <p>New user? click here to register</p>
            <Link to='/register'><Button>Register as customer</Button></Link>
        </HomeCont>
    )
}

export default Home;