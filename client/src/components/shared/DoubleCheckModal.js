import React from 'react';
import { withSnackbar } from 'notistack';

import classes from './css/DoubleCheckModal.module.css';

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Button from './Button';

const DeleteModal = props => {
    const [open, setOpen] = React.useState(false);

    const openModal = () => {
        props.enqueueSnackbar("This action cannot be undone.", { variant: 'warning' });
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const answerYes = () => {
        if (props.id) {
            props.clickDelete(props.id);
        } else {
            props.clickDelete();
        }
        closeModal();
    }

    return (
        <>
            {props.account ?
                <Button content={'Delete Account'} delete click={openModal} />
                : <Button content={'Delete'} invertedDelete click={openModal} />}

            <Modal className={classes.Modal}
                open={open}
                onClose={closeModal}
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 200 }}>
                <Fade in={open}>
                    <div className={classes.Box}>
                        <div className={classes.question}>{props.content}</div>
                        <div className={classes.choices}>
                            <Button content={'Yes'} invertedDelete click={answerYes} />
                            <Button content={'Cancel'} click={closeModal} />
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}

export default withSnackbar(DeleteModal);
