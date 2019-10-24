import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

export default () => {

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
    const NoDebts = styled.h1`
        font-size: 3rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    `;
    const Option = styled.option`font-size: 1.6rem;`;

    const [bills, setBills] = useState([{
        name: "Andrew McKinley",
        cost: "$13.73",
        restaurant: "Carl's Jr.",
        description: "",
        date: "10/01/19"
    }
    ]);

    useEffect(()=>{ 
        // axios.get(Backend Endpoint).then( results => { setBills(results); } ).catch(); 
        setBills([
            {
                name: "Andrew McKinley",
                cost: "$13.73",
                restaurant: "Carl's Jr.",
                description: "",
                date: "10/01/19"
            },{
                name: "Alexis Rodriguez",
                cost: "$22.80",
                restaurant: "Joe's Crab Shack",
                description: "",
                date: "09/23/19"
            },{
                name: "Markus Williams",
                cost: "$13.73",
                restaurant: "Applebee's",
                description: "",
                date: "11/22/18"
            }
        ]);
    }, []);
    
    const [displayedBill, setDisplayedBill] = useState({
        name: "Andrew McKinley",
        cost: "$13.73",
        restaurant: "Carl's Jr.",
        description: "",
        date: "10/01/19"
    });

    const [selectedBillId, setSelectedBillId] = useState(0);
    useEffect(()=>{
        setDisplayedBill(bills[selectedBillId]);
    },[selectedBillId,bills]);

    const updateBill = (e)=>{
        setSelectedBillId(e.target.value);
    }

    if(bills.length === 0){
        return (
            <div action="" id="iOweYou">
                <NoDebts>No Debts</NoDebts>
            </div>
        );
    }
    return(
        <div action="" id="iOweYou">
            <TopSection>
                <TheirName id="their-name">{displayedBill.name}</TheirName>
                <Amount id="amount">{displayedBill.cost}</Amount>
                <Select name="bill-select" id="bill-select" onChange={updateBill}>
                    <Option value="">Select Bill</Option>
                    {
                        bills.map( bill =>{
                            return <Option value={bills.indexOf(bill)} key={`iOweYou | ${bills.indexOf(bill)}`}>{bill.name}</Option>
                            })
                    }
                </Select>
            </TopSection>
            <BottomSection>
                <Top>
                    <Restaurant id="restaurant">{displayedBill.restaurant}</Restaurant>
                    <DayOfBill id="dayOfBill">{displayedBill.date}</DayOfBill>
                </Top>
                <DescriptionContainer>
                    <Description id="description">{displayedBill.description}</Description>
                </DescriptionContainer>
            </BottomSection>
        </div>
    );
}