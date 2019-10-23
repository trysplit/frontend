import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';


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

    splitBill(event, total, numberOfFriends) {
        event.preventDefault()
        console.log('Is this working?')
        this.setState({
            split: total / numberOfFriends
        })
        event.preventDefault();
        axiosWithAuth()
            .post('/bills')
            .then(res => {
                // console.log(res)
                localStorage.setItem('token', res.data.token);
                // props.history.push('/bills')
            })
            .catch(err => console.log(err, 'error on login'))
    }




    handleChange = e => {
        this.setState({
            bill: {
                ...this.state.bill,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = () => {
        this.props.addBill(this.state.bill)
        this.setState({
            bill: {
                returant: '',
                numberOfFriends: '',
                total: '',
                split: ''
            }
        })
        this.props.history.push('/')
    };


    render() {
        return (

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
                        placeholder='Total Cost'
                        name='total'
                        type='number'
                        value={this.state.bill.total}
                        onChange={this.handleChange}
                    />

                    <button type='submit'> Split the Bill!</button>


                </form>

            </div>
        )
    }
}

export default Split;