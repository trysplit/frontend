import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import Split from './split';
// import Input from 

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Bill() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Add a Bill
      </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>



                        {/* <Split /> */}



                        {/* <form onSubmit={this.splitBill}>
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
                                name='Number of Friends'
                                type='number'
                                value={this.state.bill.numberOfFriends}
                                onChange={this.handleChange}
                            />

                            <input
                                step='any'
                                placeholder='Total Cost'
                                name='number'
                                value={this.state.bill.total}
                                onChange={this.handleChange}
                            />

                            <button type='submit'> Split the Bill!</button>

                        </form> */}


                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
