import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { Form } from 'formik';

export default () => {
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

    const [bills, setBills] = useState([
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
    useEffect(()=>{ 
        // axios.get(Backend Endpoint).then( results => { setBills(results); } ).catch(); 
        setBills([
            {
                name: "Andrew McKinley",
                cost: "$13.73",
                restaurant: "Carl's Jr.",
                description: "",
                date: "2019-10-01"
            },{
                name: "Alexis Rodriguez",
                cost: "$22.80",
                restaurant: "Joe's Crab Shack",
                description: "",
                date: "2019-09-23"
            },{
                name: "Markus Williams",
                cost: "$13.73",
                restaurant: "Applebee's",
                description: "",
                date: "2019-11-22"
            }
        ]);
    }, []);

    const [displayedBill, setDisplayedBill] = useState({
        name: "Andrew McKinley",
        cost: "$13.73",
        restaurant: "Carl's Jr.",
        description: "",
        date: "2019-10-01"
    });

    const [selectedBillId, setSelectedBillId] = useState(0);
    useEffect(()=>{
        setDisplayedBill(bills[selectedBillId]);
    },[selectedBillId,bills]);

    const updateBill = (e)=>{
        setSelectedBillId(e.target.value);
    }

    const DayOfBill = styled.input``;
    const Edit = styled.button`
        border: 1px solid #707070;
        border-radius: 20px;
        padding: 5% 0;
        align-self: flex-end;
        background-color: white;
        width: 70%;
        margin-top: 10%;
        align-self: center;
        font-size: 1.6rem;
    `;
    const Paid = styled.input``;
    return(
        <Form action="" id="youOweMe">
            <TopSection className="top-section">
                <Name type="text" name="their-name" id="their-name" placeholder={displayedBill.name}/>
                <Amount type="text" name="amount" id="amount" placeholder={displayedBill.cost}/>
                <Select name="bill-select" id="bill-select" onChange={updateBill}>
                    <option value="">Select Bill</option>
                    {bills.map( bill =>
                    {return <option value={bills.indexOf(bill)} key={`youOweMe | ${bills.indexOf(bill)}`}>{bill.name}</option>}
                    )}
                </Select>
            </TopSection>
            <BottomSection>
                <Restaurant type="text" name="restaurant" id="restaurant" placeholder={displayedBill.restaurant}/>
                <Bottom>
                    <Description name="description" id="description" placeholder={displayedBill.description} cols="30" rows="7" />
                    <Right>
                        <DayOfBill type="date" name="dayOfBill" id="dayOfBill" defaultValue={displayedBill.date}/>
                        <Edit id="edit-button">Edit Bill</Edit>
                        <Paid type="submit" value="Debt Paid" id="paid-button"/>
                    </Right>
                </Bottom>
            </BottomSection>
        </Form>
    );
}