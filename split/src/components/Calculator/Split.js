import React from 'react';
import axios from 'axios';


import styled from 'styled-components'

const HomeCont = styled.div`
    margin: 0;
    width: 30rem;
   
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
form{
            width: 60px;
            font-family: 'Noticia Text', serif;
}
input{
            font-size: 2rem;
            placehoder{
             font-size: 2rem;
            }
            type{
                font-size: 2rem;
            }
`

class Split extends React.Component {
    constructor() {
        super();
        this.state = {
            bill: {
                resturant: '',
                numberOfFriends: '',
                total: '',
                split: '',

            },
            modal: false
        }
    }

    splitBill(event) {
        event.preventDefault()
        console.log('Is this working?')

        const data = this.state.bill
        axios
            .post('https://split-the-bill-2.herokuapp.com/api/bills', data)
            .then(res => {
                console.log('Hello Post is working')
                this.setState({ modal: false })
            })
            .catch(err => console.log(err, 'error on Bill'))
    }




    handleChange = e => {
        this.setState({
            bill: {
                ...this.state.bill,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <HomeCont>

                <div className='split' >
                    <form onSubmit={(event) => this.splitBill(event, this.state.total, this.state.numberOfFriends)}>
                        <input
                            placeholder="Enter Resturant"
                            type='text'
                            name='resturant'
                            value={this.state.bill.resturant}
                            onChange={this.handleChange}
                        />

                        <input
                            step='any'
                            placeholder='Number of Friends'
                            name='numberOfFriends'
                            type='number'
                            value={this.state.bill.numberOfFriends}
                            onChange={this.handleChange}
                        />

                        <input
                            step='any'
                            placeholder='Bill Total'
                            name='total'
                            type='number'
                            value={this.state.bill.total}
                            onChange={this.handleChange}
                        />


                        <input
                            step='any'
                            placeholder='Balanced owed by Each'
                            name='split'
                            type='number'
                            value={this.state.bill.total / this.state.bill.numberOfFriends}
                            onChange={this.handleChange}
                        />
                        <button className='splitButton' type='submit'> Split the Bill!</button>


                    </form>

                </div>
            </HomeCont>

        )
    }
}

export default Split;