import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Split from '../components/Calculator/Split';
import styled from 'styled-components'


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

    const HomeCont = styled.div`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       img {
           width:25rem;
       }
       p {
        font-style: italic;
        font-size: 40px;
        margin: 0;
       }
       button {
           background: darkolivegreen;
           text-emphasis-color: white;
           border-style: none;
           width: 8rem;
           margin: 1rem;
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

                            <h2 id="transition-modal-title">Split the Bill</h2>
                            <Split />
                        </div>
                    </Fade>
                </Modal>
            </div>
        </HomeCont>

    );
}
