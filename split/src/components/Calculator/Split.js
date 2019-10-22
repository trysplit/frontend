import React from 'react';

class Split extends React.Component {
    constructor() {
        super();
        this.state = {
            bill: {
                resturant: '',
                numberOfFriends: '',
                total: '',
                split: '',

            }
        }
    }

    splitBill = e => {
        e.preventDefault();
        if (this.state.bill.total > 0 && this.state.bill.numberOfFriends > 0) {
            this.setState({
                bill: {
                    ...this.state.bill,
                    split: parseFloat(Math.round((this.state.bill.total / this.state.bill.numberOfFriends) * 100) / 100).toFixed(2)
                }
            })
        } else {
            alert('RevieW Bill AGAIN!')
        }
    };

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

    handleModal = e => {
        e.preventDefault()
        this.handleSubmit();
        this.props.onHide();
    }

    render() {
        return (
            <div classname='split'>
                <form onSubmit={this.splitBill}>
                    <h2>Add a Bill</h2>
                    <Input
                        placeholder="Enter Resturant"
                        type='text'
                        name='resturant'
                        value={this.state.bill.resturant}
                        onChange={this.handleChange}
                    />

                    <Input
                        step='any'
                        placeholder='Number of Friends'
                        name='Number of Friends'
                        type='number'
                        value={this.state.bill.numberOfFriends}
                        onChange={this.handleChange}
                    />

                    <Input
                        step='any'
                        placeholder='Total Cost'
                        name='number'
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