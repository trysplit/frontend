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

            },
            modal: false
        }
    }


    // splitBill = e => {
    //     e.preventDefault();
    //     if (this.state.bill.total > 0 && this.state.bill.numberOfFriends > 0) {
    //         this.setState({
    //             bill: {
    //                 ...this.state.bill,
    //                 split: parseFloat(Math.round((this.state.bill.total / this.state.bill.numberOfFriends) * 100) / 100).toFixed(2)
    //             }
    //         })
    //     } else {
    //         alert('INVALID BILL ENTRY!')
    //     }
    // };

    splitBill(event, total, numberOfFriends) {
        event.preventDefault()
        console.log('Is this working?')
        this.setState({
            split: total / numberOfFriends
        })
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

    // handleModal = e => {
    //     e.preventDefault()
    //     this.handleSubmit();
    //     this.props.onHide();
    // }

    render() {
        return (

            <div className='split' >
                <form onSubmit={(event) => this.splitBill(event, this.state.total, this.state.numberOfFriends)}>
                    <h2>Add a Bill</h2>
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