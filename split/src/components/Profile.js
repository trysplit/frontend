import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import IOweYou from './IOweYou.js'
import YouOweMe from './YouOweMe.js'
import UserInfo from './UserInfo.js'

export default () =>{
    const Container = styled.div`
        width: 100vw;
        height: 94vh;
        display: flex;
    `;
    const Left = styled.div`
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 7%;
        padding-top: 2%;
    `;
    const Right = styled.div`
        width: 75%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    `;
    const Lower = styled.div`
        display: flex;
        justify-content: space-evenly;
    `;
    const UserDetails = withFormik({
        mapPropsToValues({name, password}){
            return{
                name: name || "",
                password: password || "",
            };
        },
        handleSubmit(values){
            console.log(values);
        }
    })(UserInfo);
    const FormikYouOweMe = withFormik({})(YouOweMe);
    return (
        <Container>
            <Left>
                <UserDetails/>
            </Left>
            <Right>
                <Lower>
                    <FormikYouOweMe/>
                    <IOweYou/>
                </Lower>
            </Right>
        </Container>
    );
}