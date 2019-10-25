import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addBill } from '../actions';


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
        // this.setState({
        //     split: total / numberOfFriends
        // })
        const data = this.state.bill
        axios
            .post('https://split-the-bill-2.herokuapp.com/api/bills', data)
            .then(res => {
                console.log('Hello Post is working')
                this.setState({modal: false})
                // localStorage.setItem('token', res.data.token);
                // props.history.push('/bills')
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
                    <button type='submit'> Split the Bill!</button>


                </form>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        bill: state.bill,
        test: state.test
    };
  } ;


export default connect(mapStateToProps,{addBill})(Split);