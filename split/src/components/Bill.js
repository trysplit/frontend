import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Split from '../components/Calculator/Split';
import styled from 'styled-components'
import {connect} from 'react-redux';
import { getBill } from '../actions/bill';


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid orange',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Bill = props => {

    const HomeCont = styled.div`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       height: 100vh;
       background: antiquewhite;
       button {
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
       .classes.modal{
       background: antiquewhite;


       }
    `;

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <HomeCont>
            <div >
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

                            <h2 id="transition-modal-title">Split the Bill</h2>
                            <Split />
                        </div>
                    </Fade>
                </Modal>
            </div>
        </HomeCont>

    );
}

const mapStateToProps = state => {
    return {
      bill: state.bill,
      isFetching: state.isFetching,
      error: state.error
    };
  };

export default connect(mapStateToProps,{getBill})(Bill);