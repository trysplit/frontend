import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { Form, Field } from 'formik';

export default () => {

    const Heading = styled.h1`
        font-size: 4.8rem;
    `;
    const Spacer = styled.div`
        margin-top: 1vh;
        margin-bottom: 1vh;
        border-bottom: 5px solid sienna;
    `;
    const Label = styled.label`
        font-size: 2rem;
        font-weight: normal;
        margin-bottom: 2%;
    `;
    const Edit = styled.button`
        margin-top: 5%;
        width: 50%;
        border: 1px solid #707070;
        border-radius: 10px;
        padding: 5% 0;
        align-self: flex-end;
        background-color: darkolivegreen;
        font-size: 1.3rem;
        color: white;
    `;

    const [profile, setProfile] = useState({
        name: "",
        password: ""
    });

    useEffect(()=>{ 
        // axios.get(Backend Endpoint).then( results => { setBills(results); } ).catch(); 
        setProfile({
            name: "Michael Jordan",
            password: "DonutAndAirplanes"
        })
    }, []);

    return(
    <>
        <Heading>My Profile</Heading>
        <Spacer/>
        <Form className="profile-info">
            <Label fhtmlForor="name">Name</Label>
            <Field type="text" name="name" id="name" placeholder={profile.name}/>
            <Label htmlFor="password">Password</Label>
            <Field type="password" name="password" id="password" placeholder={"Must have at least 6 characters."}/>
            <Edit type="submit">Edit Profile</Edit>
        </Form>
    </>
    );
}