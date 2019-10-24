import React, { useState} from 'react';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';

function UserInfo(){
    const [profile, setProfile] = useState({
        name: "Michael Jordan",
        username: "Insurikai",
        email: "Insurikai@gmail.com"
    });
    const Heading = styled.h1`
        font-size: 4.8rem;
    `;
    const Spacer = styled.div`
        margin-top: 1vh;
        margin-bottom: 1vh;
        border-bottom: 5px solid #BEBEBE;
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
        border-radius: 20px;
        padding: 5% 0;
        align-self: flex-end;
        background-color: white;
        font-size: 1.3rem;
    `;
    return(
    <>
        <Heading>My Profile</Heading>
        <Spacer/>
        <Form className="profile-info">
            <Label fhtmlForor="name">Name</Label>
            <Field type="text" name="name" id="name" placeholder={profile.name}/>
            {/* <Label htmlFor="username">Username</Label>
            <Field type="text" name="username" id="username" placeholder={profile.username}/> */}
            <Label htmlFor="email">E-mail</Label>
            <Field type="email" name="email" id="email" placeholder={profile.email}/>
            <Edit type="submit">Edit Profile</Edit>
        </Form>
    </>
    );
}
function YouOweMe(){
    const [bill, setBill] = useState({
        name: "Andrew McKinley",
        cost: "$13.73",
        restaurant: "Carl's Jr.",
        description: "",
        date: "10/01/19"
    });
    const TopSection = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 5px;
    `;
    const Name = styled.input`
        margin-right: 5px;
        width: 75%;
        padding: 1px 3px;
        font-size: 1.6rem;
    `;
    const Amount = styled.input`
        margin-right: 5px;
        max-width: 17%;
        padding: 1px 1px;
        padding-right: 5px;
        text-align: right;
        font-size: 1.6rem;
    `;
    const Select = styled.select`
        width: 0%;
        text-align: left;
        padding: 0 2%;
    `;
    const BottomSection = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
    `;
    const Restaurant = styled.input`
        width: 100%;
        padding: 1px 3px;
        margin-bottom: 5px;
    `;
    const Bottom = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
    `;
    const Description = styled.textarea`
        width: 67%;
        padding: 5px 3px;
        font-family: inherit;
    `;
    const Right = styled.div`
        width: 31%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;
    const DayOfBill = styled.input``;
    const Edit = styled.input``;
    const Paid = styled.input``;
    return(
        <Form action="" id="youOweMe">
            <TopSection class="top-section">
                <Name type="text" name="their-name" id="their-name" placeholder="John Doe"/>
                <Amount type="text" name="amount" id="amount" placeholder="$999.99"/>
                <Select name="bill-select" id="bill-select">
                    <option>Tabitha</option>
                    <option>John</option>
                    <option>Alexus</option>
                    <option>Mark</option>
                    <option>Andrew</option>
                </Select>
            </TopSection>
            <BottomSection>
                <Restaurant type="text" name="restaurant" id="restaurant" placeholder="Restaurant"/>
                <Bottom>
                    <Description name="description" id="description" placeholder="Description" cols="30" rows="7" />
                    <Right>
                        <DayOfBill type="date" name="dayOfBill" id="dayOfBill"/>
                        <Edit type="submit" value="Edit Bill" id="edit-button"/>
                        <Paid type="submit" value="Debt Paid" id="paid-button"/>
                    </Right>
                </Bottom>
            </BottomSection>
        </Form>
    );
}
function IOweYou(){
    const TopSection = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 5px;
    `;
    const TheirName = styled.p`
    font-size: 1.6rem;
    padding-bottom: 5px;
        margin-right: 5px;
        width: 75%;
        padding: 1px 3px;
    `;
    const Amount = styled.p`
        font-size: 1.6rem;
        padding-bottom: 5px;
        margin-right: 5px;
        max-width: 15%;
        padding: 1px 3px;
        text-align: right;
    `;
    const Select = styled.select`
        width: 6%;
        text-align: center;
        background: none;
        border: none;
        padding: 0 5%;
    `;
    const BottomSection = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
    `;
    const Top = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 5px;
    `;
    const Restaurant = styled.p`
        font-size: 1.6rem;
        padding-bottom: 5px;
        border-bottom: 2px solid #707070;
        width: 65%;
        padding: 1px 3px;
        margin-bottom: 5px;
    `;
    const Description = styled.p`
        width: 100%;
        height: 100%;
        border: none;
        font-size: 1.6rem;
        padding-bottom: 5px;
    `;
    const DayOfBill = styled.p`
        font-size: 1.6rem;
        padding-bottom: 5px;
        border-bottom: 2px solid #707070;
        max-width: 30%;
        width: fit-content;
        margin-bottom: 5px;
        text-align: right;
        padding: 0 5px;
    `;
    const DescriptionContainer = styled.div`
        min-height: 23.2vh;
        padding: 5px 3px;
        border: 2px solid #707070;
    `;
    return(
        <Form action="" id="iOweYou">
            <TopSection>
                <TheirName id="their-name">Andrew Smith</TheirName>
                <Amount id="amount">$27.43</Amount>
                <Select name="bill-select" id="bill-select">
                    {/* {Map Here} */}
                    <option>Andrew</option>
                    <option>Mikayla</option>
                    <option>Denzel</option>
                    <option>Alex</option>
                </Select>
            </TopSection>
            <BottomSection>
                <Top>
                    <Restaurant id="restaurant">Red Robin's</Restaurant>
                    <DayOfBill id="dayOfBill">12/31/2020</DayOfBill>
                </Top>
                <DescriptionContainer>
                    <Description id="description"></Description>
                </DescriptionContainer>
            </BottomSection>
        </Form>
    );
}
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
    const UserDetails = withFormik({})(UserInfo);
    const FormikIOweYou = withFormik({})(IOweYou);
    const FormikYouOweMe = withFormik({})(YouOweMe);
    return (
        <Container>
            <Left>
                <UserDetails/>
            </Left>
            <Right>
                <Lower>
                    <FormikYouOweMe/>
                    <FormikIOweYou/>
                </Lower>
            </Right>
        </Container>
    );
}