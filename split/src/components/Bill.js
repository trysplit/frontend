import React from 'react';
import { Route } from 'react-router-dom';
import { deleteBill } from '../actions/bill'
import { connect } from 'react-redux';

class Bill extends React.Component {
    constructor(props) {
        super(props)
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            open: false,
        };
    }

    handleClose() {
        this.setState({ open: false });
    }

    handleOpen() {
        this.setState({ open: true });
    }

    render() {
        return (
            <div className='Bill'>

            </div>
        )
    }
}
const mapStateToProps = () => {
    return {}
}
export default connect(
    mapStateToProps,
    { deleteBill }
)(Bill);
